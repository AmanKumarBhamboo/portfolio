const bars = [34, 52, 41, 68, 57, 82, 74, 96, 88, 112];

export const ChartArt = ({ className = "" }) => {
  const w = 440;
  const h = 260;
  const bw = 28;
  const gap = (w - bars.length * bw) / (bars.length - 1);
  const pts = bars.map((v, i) => [i * (bw + gap) + bw / 2, h - v * 1.9 - 14]);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const [lx, ly] = pts[pts.length - 1];

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      role="img"
      aria-label="Decorative rising bar and line chart"
    >
      {[0.25, 0.5, 0.75].map((t) => (
        <line key={t} x1="0" x2={w} y1={h * t} y2={h * t} stroke="currentColor" strokeOpacity="0.12" strokeDasharray="3 5" />
      ))}
      {bars.map((v, i) => (
        <rect
          key={i}
          x={i * (bw + gap)}
          y={h - v * 1.9 - 14}
          width={bw}
          height={v * 1.9 + 14}
          fill="currentColor"
          fillOpacity={i === bars.length - 1 ? 1 : 0.1 + i * 0.012}
          className="origin-bottom animate-[grow_1s_cubic-bezier(0.16,1,0.3,1)_both]"
          style={{ animationDelay: `${400 + i * 70}ms`, transformBox: "fill-box" }}
        />
      ))}
      <path
        d={line}
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
        strokeDasharray="1"
        className="animate-[draw_1.8s_ease-out_0.9s_both]"
      />
      <circle cx={lx} cy={ly} r="6" fill="var(--color-primary)" className="animate-[rise_0.6s_ease-out_2.4s_both]" />
      <circle cx={lx} cy={ly} r="14" fill="none" stroke="var(--color-primary)" strokeOpacity="0.4" className="animate-[rise_0.6s_ease-out_2.5s_both]" />
    </svg>
  );
};
