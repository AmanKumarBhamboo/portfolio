export const WatchDial = ({ className = "" }) => {
  const ticks = Array.from({ length: 60 }, (_, i) => i);

  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Decorative watch dial">
      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeOpacity="0.2" />
      {ticks.map((i) => {
        const major = i % 5 === 0;
        return (
          <line
            key={i}
            x1="100"
            y1={major ? 12 : 14}
            x2="100"
            y2={major ? 26 : 19}
            stroke="currentColor"
            strokeWidth={major ? 3 : 1}
            strokeOpacity={major ? 1 : 0.5}
            transform={`rotate(${i * 6} 100 100)`}
          />
        );
      })}
      <line x1="100" y1="100" x2="100" y2="62" stroke="currentColor" strokeWidth="5" strokeLinecap="round" transform="rotate(305 100 100)" />
      <line x1="100" y1="100" x2="100" y2="38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" transform="rotate(60 100 100)" />
      <g className="origin-center animate-[spin_60s_linear_infinite]" style={{ transformOrigin: "100px 100px" }}>
        <line x1="100" y1="116" x2="100" y2="28" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <circle cx="100" cy="100" r="5" fill="var(--color-primary)" />
    </svg>
  );
};
