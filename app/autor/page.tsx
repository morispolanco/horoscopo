import Image from 'next/image';

export const metadata = {
  title: 'Sobre el Autor ✦ Samir Al-Din',
  description: 'Biografía del reconocido astrólogo libanés Samir Al-Din, experto en Zoroastrismo y horóscopos.',
};

export default function AutorPage() {
  return (
    <main className="w-full px-4 py-12 max-w-4xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
        
        {/* Columna de la Foto */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="relative w-64 h-64 md:w-full md:h-80 rounded-2xl overflow-hidden border border-purple-800/30 shadow-[0_0_40px_rgba(124,58,237,0.15)]">
            <Image 
              src="/autor.png" 
              alt="Retrato de Samir Al-Din" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 256px, 33vw"
            />
          </div>
          <div className="mt-4 flex gap-2 justify-center">
            <span className="text-amber-400/60 text-lg">✦ ☽ ✦</span>
          </div>
        </div>

        {/* Columna de la Biografía */}
        <div className="w-full md:w-2/3">
          <p className="text-amber-400/70 text-sm tracking-widest uppercase font-mono mb-2 text-center md:text-left">
            ✦ El Astrólogo ✦
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-center md:text-left">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
              Samir Al-Din
            </span>
          </h1>

          <div className="space-y-4 text-slate-300 leading-relaxed text-lg font-serif">
            <p>
              Nacido en 1974 en el corazón histórico de Beirut, Samir Al-Din es uno de los astrólogos más enigmáticos y respetados del mundo contemporáneo. Creció rodeado de las ricas tradiciones místicas del Líbano y el Medio Oriente, lo que despertó en él una fascinación temprana por los astros y las fuerzas invisibles que rigen el destino humano.
            </p>
            <p>
              A lo largo de su carrera, Samir se ha especializado profundamente en las ciencias del <strong>Zoroastrismo</strong> antiguo, rescatando conocimientos astrológicos perdidos de las antiguas civilizaciones persas y mesopotámicas. Su enfoque no se centra únicamente en la predicción del futuro, sino en la comprensión de la energía del alma y su relación íntima con los ciclos planetarios.
            </p>
            <p>
              Hoy en día, sus lecturas y horóscopos diarios son leídos por millones de personas en todo el mundo. Su voz se caracteriza por una franqueza poética y una sabiduría profunda que evita los clichés, buscando siempre conectar directamente con la esencia espiritual de sus lectores.
            </p>
          </div>
          
          <div className="mt-8 p-6 bg-purple-900/10 border border-purple-500/20 rounded-xl italic text-slate-400 text-center">
            &ldquo;El universo no guarda secretos; simplemente espera a que aprendamos su idioma.&rdquo; <br/>
            <span className="text-sm mt-2 block text-amber-500/80">— Samir Al-Din</span>
          </div>
        </div>

      </div>
    </main>
  );
}
