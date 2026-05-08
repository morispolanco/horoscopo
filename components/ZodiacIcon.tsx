interface ZodiacIconProps {
  symbol: string;
  color: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function ZodiacIcon({ symbol, color, size = 'md' }: ZodiacIconProps) {
  const sizeClasses = {
    sm: 'text-2xl w-10 h-10',
    md: 'text-4xl w-16 h-16',
    lg: 'text-5xl w-20 h-20',
  };

  return (
    <div
      className={`${sizeClasses[size]} flex items-center justify-center rounded-full border-2 mx-auto mb-3`}
      style={{
        borderColor: color,
        background: `radial-gradient(circle, ${color}22 0%, transparent 70%)`,
        boxShadow: `0 0 20px ${color}44`,
        color: color,
      }}
    >
      <span className="leading-none">{symbol}</span>
    </div>
  );
}
