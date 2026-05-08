interface AdBannerProps {
  type: 'horizontal' | 'vertical' | 'square';
  label?: string;
}

const AD_SIZES = {
  horizontal: 'w-full h-24 md:h-20',
  vertical: 'w-40 h-full min-h-[600px]',
  square: 'w-full h-48',
};

export default function AdBanner({ type, label = 'PUBLICIDAD' }: AdBannerProps) {
  return (
    <div
      className={`
        ${AD_SIZES[type]}
        ad-placeholder
        border border-dashed border-purple-700/40
        rounded-lg
        flex flex-col items-center justify-center
        gap-2
        relative
        overflow-hidden
      `}
    >
      {/* Esquinas decorativas */}
      <span className="absolute top-1 left-1 text-purple-600/50 text-xs">◈</span>
      <span className="absolute top-1 right-1 text-purple-600/50 text-xs">◈</span>
      <span className="absolute bottom-1 left-1 text-purple-600/50 text-xs">◈</span>
      <span className="absolute bottom-1 right-1 text-purple-600/50 text-xs">◈</span>

      <div className="text-center px-4">
        <div className="text-purple-400/60 text-xs font-mono tracking-widest uppercase mb-1">
          ✦ {label} ✦
        </div>
        <div className="text-purple-600/40 text-[10px] tracking-wider">
          {type === 'horizontal' && '728 × 90 · Leaderboard'}
          {type === 'vertical' && '160 × 600 · Wide Skyscraper'}
          {type === 'square' && '300 × 250 · Medium Rectangle'}
        </div>
      </div>
    </div>
  );
}
