'use client';

import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [ads, setAds] = useState({ horizontal: '', vertical: '', square: '' });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetch('/api/ads').then(r => r.json()).then(data => {
        if (data) setAds(data);
    });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    try {
      const res = await fetch('/api/ads', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-admin-password': password
        },
        body: JSON.stringify(ads)
      });
      if (res.ok) {
        setMessage('¡Publicidad guardada correctamente!');
      } else {
        setMessage('Error al guardar. Verifica la contraseña.');
      }
    } catch (e) {
      setMessage('Error de conexión.');
    }
    setSaving(false);
  };

  return (
    <div className="min-h-screen bg-cosmic-dark p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-amber-400 font-serif">Panel de Administración de Publicidad</h1>
        
        <div className="bg-purple-900/20 border border-purple-500/30 p-5 rounded-lg mb-8 text-sm text-purple-200 leading-relaxed">
          <strong>Nota importante sobre Vercel:</strong> Si tu aplicación está desplegada en Vercel, los cambios que realices aquí <strong>NO persistirán</strong> cuando la función se reinicie, ya que el sistema de archivos de Vercel es de solo lectura.<br/><br/>
          <strong>¿Cómo usar este panel correctamente?</strong><br/>
          1. Ejecuta la aplicación localmente en tu computadora (`npm run dev`).<br/>
          2. Pega aquí los códigos de publicidad y guarda los cambios.<br/>
          3. Sube los cambios a GitHub (`git add .`, `git commit`, `git push`). Vercel publicará la versión con los anuncios actualizados.
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-slate-300 mb-2 font-bold">Contraseña de Administrador (ADMIN_PASSWORD en .env)</label>
            <input 
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full max-w-md bg-slate-900 text-slate-300 border border-slate-700 rounded p-3 focus:outline-none focus:border-amber-500"
              placeholder="Introduce la contraseña"
            />
          </div>

          <hr className="border-slate-800" />

          <div>
            <label className="block text-slate-300 mb-2 font-bold">Banner Horizontal (728x90)</label>
            <p className="text-xs text-slate-500 mb-2">Aparece en la parte superior de la página, debajo del encabezado.</p>
            <textarea 
              value={ads.horizontal}
              onChange={e => setAds({...ads, horizontal: e.target.value})}
              className="w-full h-32 bg-slate-900 text-slate-300 border border-slate-700 rounded p-3 font-mono text-xs focus:outline-none focus:border-amber-500"
              placeholder="Pega aquí tu código de Google AdSense o similar (<script>...)"
            />
          </div>
          
          <div>
            <label className="block text-slate-300 mb-2 font-bold">Banner Vertical (160x600)</label>
            <p className="text-xs text-slate-500 mb-2">Aparece en la barra lateral derecha (solo en pantallas grandes).</p>
            <textarea 
              value={ads.vertical}
              onChange={e => setAds({...ads, vertical: e.target.value})}
              className="w-full h-32 bg-slate-900 text-slate-300 border border-slate-700 rounded p-3 font-mono text-xs focus:outline-none focus:border-amber-500"
              placeholder="Pega aquí tu código de Google AdSense o similar (<script>...)"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-2 font-bold">Banner Cuadrado (300x250)</label>
            <p className="text-xs text-slate-500 mb-2">Aparece entre las filas de las cartas del horóscopo.</p>
            <textarea 
              value={ads.square}
              onChange={e => setAds({...ads, square: e.target.value})}
              className="w-full h-32 bg-slate-900 text-slate-300 border border-slate-700 rounded p-3 font-mono text-xs focus:outline-none focus:border-amber-500"
              placeholder="Pega aquí tu código de Google AdSense o similar (<script>...)"
            />
          </div>

          <div className="pt-4 flex items-center gap-4">
            <button 
              onClick={handleSave}
              disabled={saving}
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-8 rounded transition-colors"
            >
              {saving ? 'Guardando...' : 'Guardar Publicidad'}
            </button>

            {message && (
              <span className={message.includes('Error') ? "text-red-400" : "text-green-400 font-bold"}>
                {message}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
