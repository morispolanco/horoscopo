import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Horóscopo Diario ✦ Tu Guía Cósmica',
  description:
    'Lee tu horóscopo diario para los 12 signos del zodiaco. Predicciones únicas cada día para Aries, Tauro, Géminis, Cáncer, Leo, Virgo, Libra, Escorpio, Sagitario, Capricornio, Acuario y Piscis.',
  keywords: 'horóscopo, horoscopo diario, signos zodiacales, astrología, predicciones',
  openGraph: {
    title: 'Horóscopo Diario ✦ Tu Guía Cósmica',
    description: 'Descubre lo que los astros tienen preparado para ti hoy.',
    type: 'website',
  },
};

// Estrellas generadas de forma determinista para evitar diferencias de hidratación
const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  top: `${(i * 7 + 13) % 100}%`,
  left: `${(i * 11 + 17) % 100}%`,
  size: (i % 3) + 1,
  duration: 3 + (i % 4),
  delay: (i % 5) * 0.8,
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-cosmic-dark text-slate-100 relative">
        {/* Fondo de estrellas */}
        <div className="stars-bg" aria-hidden="true">
          {STARS.map((star) => (
            <div
              key={star.id}
              className="star"
              style={{
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                '--duration': `${star.duration}s`,
                '--delay': `${star.delay}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Nebulosas de fondo decorativas */}
        <div
          className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
          aria-hidden="true"
        />
        <div
          className="fixed bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #f59e0b, transparent 70%)' }}
          aria-hidden="true"
        />

        {/* Contenido con z-index sobre el fondo */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
