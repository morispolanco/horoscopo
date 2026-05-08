import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const adsFilePath = path.join(process.cwd(), 'data', 'ads.json');

function ensureAdsFile() {
  const dir = path.dirname(adsFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(adsFilePath)) {
    fs.writeFileSync(adsFilePath, JSON.stringify({ horizontal: '', vertical: '', square: '' }));
  }
}

export async function GET() {
  try {
    ensureAdsFile();
    const data = fs.readFileSync(adsFilePath, 'utf-8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ horizontal: '', vertical: '', square: '' });
  }
}

export async function POST(request: NextRequest) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  const providedPassword = request.headers.get('x-admin-password');

  // Solo verificar contraseña si está configurada en las variables de entorno
  if (adminPassword && providedPassword !== adminPassword) {
    return NextResponse.json({ error: 'No autorizado. Contraseña incorrecta.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    ensureAdsFile();
    fs.writeFileSync(adsFilePath, JSON.stringify(body, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error al guardar la publicidad' }, { status: 500 });
  }
}
