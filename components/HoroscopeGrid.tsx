'use client';

import { ZODIAC_SIGNS } from '@/lib/zodiac';
import HoroscopeCard from './HoroscopeCard';
import AdBanner from './AdBanner';

export default function HoroscopeGrid() {
  const signs = ZODIAC_SIGNS;

  // Dividir los 12 signos en dos grupos de 6 con un anuncio en el medio
  const firstHalf = signs.slice(0, 6);
  const secondHalf = signs.slice(6, 12);

  return (
    <div className="w-full">
      {/* Primera fila de 6 signos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {firstHalf.map((sign) => (
          <HoroscopeCard key={sign.id} sign={sign} />
        ))}
      </div>

      {/* Banner publicitario entre secciones */}
      <div className="mb-8">
        <AdBanner type="square" label="PUBLICIDAD" />
      </div>

      {/* Segunda fila de 6 signos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {secondHalf.map((sign) => (
          <HoroscopeCard key={sign.id} sign={sign} />
        ))}
      </div>
    </div>
  );
}
