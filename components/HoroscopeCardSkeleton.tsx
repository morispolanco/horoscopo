export default function HoroscopeCardSkeleton() {
  return (
    <div className="rounded-2xl border border-purple-800/30 overflow-hidden bg-gradient-to-br from-purple-950/30 to-indigo-950/20 p-5">
      {/* Icono skeleton */}
      <div className="skeleton w-16 h-16 rounded-full mx-auto mb-3" />

      {/* Nombre */}
      <div className="skeleton h-5 w-24 rounded-full mx-auto mb-1" />

      {/* Fechas */}
      <div className="skeleton h-3 w-32 rounded-full mx-auto mb-1" />

      {/* Elemento */}
      <div className="skeleton h-3 w-16 rounded-full mx-auto mb-4" />

      {/* Separador */}
      <div className="skeleton h-px w-full mb-4" />

      {/* Texto horóscopo - 5 líneas (prompts más largos) */}
      <div className="space-y-2">
        <div className="skeleton h-3 w-full rounded" />
        <div className="skeleton h-3 w-full rounded" />
        <div className="skeleton h-3 w-full rounded" />
        <div className="skeleton h-3 w-full rounded" />
        <div className="skeleton h-3 w-3/5 rounded" />
      </div>
    </div>
  );
}
