'use client';

import { useState, useEffect } from 'react';
import { ZodiacSign, ELEMENT_COLORS } from '@/lib/zodiac';
import ZodiacIcon from './ZodiacIcon';
import HoroscopeCardSkeleton from './HoroscopeCardSkeleton';

interface HoroscopeCardProps {
  sign: ZodiacSign;
}

export default function HoroscopeCard({ sign }: HoroscopeCardProps) {
  const [horoscope, setHoroscope] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHoroscope = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `/api/horoscope?sign=${sign.id}&signName=${encodeURIComponent(sign.name)}`
        );

        if (!response.ok) {
          throw new Error('No se pudo obtener el horóscopo');
        }

        const data = await response.json();
        setHoroscope(data.horoscope);
      } catch (err) {
        setError('No se pudo cargar el horóscopo. Intenta de nuevo.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHoroscope();
  }, [sign.id, sign.name]);

  if (loading) {
    return <HoroscopeCardSkeleton />;
  }

  return (
    <div
      className="group rounded-2xl border overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl p-5 cursor-default"
      style={{
        borderColor: `${sign.color}33`,
        background: `linear-gradient(135deg, ${sign.color}11 0%, rgba(10,0,21,0.8) 100%)`,
        boxShadow: `0 4px 30px ${sign.color}11`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 40px ${sign.color}33`;
        (e.currentTarget as HTMLDivElement).style.borderColor = `${sign.color}66`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 30px ${sign.color}11`;
        (e.currentTarget as HTMLDivElement).style.borderColor = `${sign.color}33`;
      }}
    >
      {/* Icono del signo */}
      <ZodiacIcon symbol={sign.symbol} color={sign.color} size="md" />

      {/* Nombre del signo */}
      <h2
        className="text-xl font-bold text-center mb-1 font-serif tracking-wide"
        style={{ color: sign.color }}
      >
        {sign.name}
      </h2>

      {/* Emoji + Fechas */}
      <p className="text-center text-slate-400 text-xs mb-1">
        {sign.emoji} {sign.dateRange}
      </p>

      {/* Elemento */}
      <p className={`text-center text-xs mb-4 font-medium ${ELEMENT_COLORS[sign.element]}`}>
        Elemento {sign.element}
      </p>

      {/* Separador */}
      <div
        className="h-px w-full mb-4 opacity-30"
        style={{ background: `linear-gradient(90deg, transparent, ${sign.color}, transparent)` }}
      />

      {/* Horóscopo */}
      {error ? (
        <div className="text-center">
          <p className="text-red-400 text-xs mb-2">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="text-purple-400 text-xs underline hover:text-purple-300"
          >
            Reintentar
          </button>
        </div>
      ) : (
        <p className="text-slate-300 text-sm leading-relaxed text-center italic">
          &ldquo;{horoscope}&rdquo;
        </p>
      )}

      {/* Estrellas decorativas en las esquinas */}
      <div className="flex justify-between mt-4">
        <span className="text-xs opacity-30" style={{ color: sign.color }}>✦</span>
        <span className="text-xs opacity-30" style={{ color: sign.color }}>✦</span>
      </div>
    </div>
  );
}
