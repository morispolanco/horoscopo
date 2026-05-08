import { NextRequest, NextResponse } from 'next/server';

// Cache en memoria para el día actual (persiste mientras el servidor esté activo)
const cache: Record<string, { date: string; horoscope: string }> = {};

function getTodayDate(): string {
  return new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
}

async function generateHoroscope(sign: string, signName: string, date: string): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    throw new Error('OPENROUTER_API_KEY no está configurada');
  }

  const systemPrompt = `Eres un astrólogo de cámara con siglos de conocimiento destilado: lees cartas natales, estudias los tránsitos planetarios del día y entregas mensajes que parecen escritos para una sola persona. Tu voz es la de un sabio que ve lo que otros no ven — ni demasiado oscuro, ni falsamente luminoso, sino profundamente verdadero.

Reglas absolutas para cada horóscopo:

1. PROHÍBETE LOS CLICHÉS: jamás escribas frases como "tendrás un buen día", "las cosas mejorarán", "mantén una actitud positiva", "el universo conspira a tu favor" o cualquier variante genérica. Si una frase podría servir para cualquier signo cualquier día, elimínala sin piedad.

2. UNA PREDICCIÓN CENTRAL CONCRETA: incluye algo específico y reconocible — una situación, una conversación, una tensión interna, una oportunidad puntual — que el lector pueda identificar en su vida real ese mismo día. No vago, no etéreo: concreto y reconocible.

3. LENGUAJE EVOCADOR: usa imágenes vívidas, metáforas precisas, referencias a la energía planetaria del día (menciona qué planeta domina o qué aspecto es relevante para ese signo en esa fecha específica). El lector debe sentir que hay un cosmos real y vivo detrás del texto.

4. ESTRUCTURA ENTRETEJIDA: toca amor, trabajo y energía personal en un solo tejido narrativo de 4-5 oraciones. Nunca los separes como lista. Que fluyan como corrientes dentro del mismo río.

5. ESCRÍBELO PARA UNA PERSONA: usa "tú" directo y personal. El lector debe sentir que este horóscopo lo conoce, que fue escrito solo para él, no para todos los nacidos bajo ese signo.

6. MANTRA DEL DÍA: cierra siempre con un mantra — una frase corta, poderosa, memorable, máximo 8 palabras — que funcione como ancla emocional para ese día. Preséntala en cursiva, precedida de un guion largo: — *frase del mantra*.

Formato de respuesta: solo el texto del horóscopo, sin encabezados, sin el nombre del signo al inicio, sin asteriscos, sin bullets ni numeración. Prosa fluida en segunda persona, 4-5 oraciones seguidas del mantra.`;

  const userPrompt = `Horóscopo para ${signName} — ${date}.

Escribe el horóscopo de hoy siguiendo todas las reglas del sistema. Recuerda:
- La predicción central debe ser concreta y reconocible para alguien que es ${signName}
- Referencia la energía planetaria específica de hoy para este signo
- 4-5 oraciones entretejidas (amor, trabajo, energía personal) + mantra en cursiva al final
- Sin clichés. Sin frases vacías. Sin genéricos.
- Que el lector sienta que lo escribiste solo para él.`;

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'https://horoscopo-diario.vercel.app',
      'X-Title': 'Horóscopo Diario',
    },
    body: JSON.stringify({
      model: 'anthropic/claude-sonnet-4.6',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      max_tokens: 350,
      temperature: 0.85,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`OpenRouter API error: ${response.status} - ${error}`);
  }

  const data = await response.json();
  const horoscope = data.choices?.[0]?.message?.content?.trim();

  if (!horoscope) {
    throw new Error('La API no devolvió contenido');
  }

  return horoscope;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sign = searchParams.get('sign');
  const signName = searchParams.get('signName');

  if (!sign || !signName) {
    return NextResponse.json(
      { error: 'Parámetros "sign" y "signName" son requeridos' },
      { status: 400 }
    );
  }

  const today = getTodayDate();
  const cacheKey = `${sign}-${today}`;

  // Verificar caché
  if (cache[cacheKey] && cache[cacheKey].date === today) {
    return NextResponse.json({
      sign,
      date: today,
      horoscope: cache[cacheKey].horoscope,
      cached: true,
    });
  }

  try {
    const horoscope = await generateHoroscope(sign, signName, today);

    // Guardar en caché
    cache[cacheKey] = { date: today, horoscope };

    return NextResponse.json({
      sign,
      date: today,
      horoscope,
      cached: false,
    });
  } catch (error) {
    console.error(`Error generando horóscopo para ${sign}:`, error);
    return NextResponse.json(
      { error: `No se pudo generar el horóscopo: ${error instanceof Error ? error.message : 'Error desconocido'}` },
      { status: 500 }
    );
  }
}
