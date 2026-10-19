const items = [
  "Python", "SQL", "Tableau", "Dynamics NAV", "ETL Pipelines", "Pandas",
  "PostgreSQL", "Power Query", "Excel", "Rust", "Statistics", "Data Modeling",
];

export const Ticker = () => (
  <div className="overflow-hidden border-y border-foreground bg-foreground text-background" aria-hidden="true">
    <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
      {[0, 1].map((k) => (
        <ul key={k} className="flex shrink-0 items-center">
          {items.map((t) => (
            <li key={t} className="flex items-center whitespace-nowrap py-4 font-display text-2xl md:text-3xl">
              <span className="px-6">{t}</span>
              <span className="text-primary">✦</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);
