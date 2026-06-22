export function PCBBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="trace" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.7 0.18 240)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="oklch(0.85 0.15 210)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.7 0.18 240)" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {[
          "M0,120 L240,120 L280,160 L520,160 L560,200 L880,200 L920,160 L1200,160",
          "M0,360 L160,360 L200,320 L440,320 L480,360 L760,360 L800,400 L1200,400",
          "M0,560 L320,560 L360,600 L640,600 L680,560 L1040,560 L1080,600 L1200,600",
          "M120,0 L120,80 L160,120 L160,280 L200,320 L200,520 L240,560 L240,800",
          "M960,0 L960,140 L1000,180 L1000,420 L1040,460 L1040,800",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="url(#trace)"
            strokeWidth="1.5"
            strokeDasharray="8 6"
            className="animate-trace"
            style={{ animationDelay: `${i * 0.8}s` }}
          />
        ))}

        {[
          [120, 120], [280, 160], [560, 200], [920, 200],
          [200, 360], [480, 360], [800, 400],
          [360, 600], [680, 600], [1040, 600],
          [960, 140], [1000, 420],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="6" fill="oklch(0.7 0.18 240)" opacity="0.15" />
            <circle
              cx={cx}
              cy={cy}
              r="3"
              fill="oklch(0.85 0.15 210)"
              className="animate-pulse-glow"
              style={{ animationDelay: `${(i % 5) * 0.4}s` }}
            />
          </g>
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
