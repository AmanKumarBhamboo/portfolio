import { ArrowDownRight } from "lucide-react";
import { profile, stats } from "@/data/content";

export const Hero = () => (
  <section className="pb-16 pt-14 md:pb-24 md:pt-24">
    <div className="wrap">
      <p className="label animate-rise">{profile.role} · {profile.location}</p>

      <h1 className="mt-6 max-w-5xl text-[3.4rem] leading-[0.98] animate-rise [animation-delay:120ms] sm:text-7xl md:text-[7.5rem]">
        Turning messy data into <em className="text-primary">decisions</em> people can act on.
      </h1>

      <div className="mt-12 grid gap-10 md:grid-cols-12 animate-rise [animation-delay:260ms]">
        <p className="max-w-xl text-lg text-muted-foreground md:col-span-6 md:col-start-1 md:text-xl">
          I&rsquo;m {profile.short} — I build dashboards, pipelines and research that make large datasets
          legible. Python, SQL, Tableau and ERP data by day; Rust and systems programming by night.
        </p>
        <div className="flex flex-wrap items-start gap-3 md:col-span-6 md:justify-end">
          <a href="#work" className="btn-primary">
            See the work <ArrowDownRight size={16} />
          </a>
          <a href="#contact" className="btn">Get in touch</a>
        </div>
      </div>

      <dl className="mt-20 grid border-t border-border sm:grid-cols-3 animate-rise [animation-delay:400ms]">
        {stats.map((s, i) => (
          <div
            key={s.value}
            className={`py-6 sm:pr-6 ${i > 0 ? "border-t border-border sm:border-l sm:border-t-0 sm:pl-6" : ""}`}
          >
            <dt className="font-display text-5xl md:text-6xl">{s.value}</dt>
            <dd className="mt-2 max-w-[18rem] text-sm text-muted-foreground">{s.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
