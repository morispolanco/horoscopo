import AdBanner from '@/components/AdBanner';
import HoroscopeGrid from '@/components/HoroscopeGrid';

function getTodayFormatted(): string {
  return new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function HomePage() {
  const today = getTodayFormatted();
  const todayFormatted = today.charAt(0).toUpperCase() + today.slice(1);

  return (
    <>
      {/* === HEADER === */}
      <header className="w-full pt-8 pb-4 text-center px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-amber-400/70 text-sm tracking-widest uppercase font-mono mb-2">
            ✦ Tu Guía Cósmica ✦
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-3">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
              Horóscopo Diario
            </span>
          </h1>
          <p className="text-purple-300/80 text-base md:text-lg">
            {todayFormatted}
          </p>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto leading-relaxed">
            Los astros hablan cada día con un mensaje único para cada signo del zodiaco.
            Descubre lo que el universo tiene preparado para ti.
          </p>
        </div>
      </header>

      {/* === BANNER SUPERIOR (PUBLICIDAD) === */}
      <div className="w-full px-4 py-4 max-w-5xl mx-auto">
        <AdBanner type="horizontal" label="PUBLICIDAD" />
      </div>

      {/* === SEPARADOR DECORATIVO === */}
      <div className="flex items-center justify-center gap-3 py-2 px-4">
        <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-purple-700/40" />
        <span className="text-amber-400/60 text-lg">✦ ☽ ✦</span>
        <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-purple-700/40" />
      </div>

      {/* === LAYOUT PRINCIPAL === */}
      <main className="w-full px-4 py-6 max-w-6xl mx-auto">
        <div className="flex gap-6">
          {/* CONTENIDO PRINCIPAL */}
          <div className="flex-1 min-w-0">
            <HoroscopeGrid />
          </div>

          {/* === SIDEBAR DERECHO (PUBLICIDAD - solo desktop) === */}
          <aside className="hidden xl:flex flex-col gap-4 w-44 flex-shrink-0">
            <div className="text-center">
              <div className="text-purple-500/50 text-[10px] tracking-widest uppercase mb-3 font-mono">
                ✦ Anuncios ✦
              </div>
            </div>
            <AdBanner type="vertical" label="PUBLICIDAD" />
          </aside>
        </div>
      </main>

      {/* === FOOTER === */}
      <footer className="w-full text-center py-10 px-4 mt-4 border-t border-purple-900/30">
        <div className="max-w-xl mx-auto">
          <p className="text-amber-400/50 text-lg mb-2">✦ ☽ ✦</p>
          <p className="text-slate-500 text-xs leading-relaxed">
            Los horóscopos son generados con inteligencia artificial con fines de entretenimiento.
            <br />
            © {new Date().getFullYear()} Horóscopo Diario — Que los astros guíen tu camino.
          </p>
        </div>
      </footer>
    </>
  );
}
