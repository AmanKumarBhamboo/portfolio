import { ArrowDownRight } from "lucide-react";
import { profile } from "@/data/content";
import { ChartArt } from "./ChartArt";

export const Hero = () => (
  <section className="relative overflow-hidden pb-16 pt-14 md:pb-24 md:pt-24">
    <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />
    <div className="wrap relative">
      <p className="label animate-rise">{profile.role} · {profile.location}</p>

      <h1 className="mt-6 max-w-5xl text-[3.4rem] leading-[0.98] animate-rise [animation-delay:120ms] sm:text-7xl md:text-[7.5rem]">
        Turning messy data into <em className="text-primary">decisions</em> people can act on.
      </h1>
      <div className="mt-12 grid items-end gap-12 md:grid-cols-12 animate-rise [animation-delay:260ms]">
        <div className="md:col-span-6">
          <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
            I&rsquo;m {profile.short} — I build dashboards, pipelines and research that make large
            datasets legible. Python, SQL, Tableau and ERP data by day; Rust and systems programming
            by night.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn-primary">
              See the work <ArrowDownRight size={16} />
            </a>
            <a href="#contact" className="btn">Get in touch</a>
          </div>
        </div>
        <div className="md:col-span-6">
          <ChartArt className="block w-full text-foreground" />
        </div>
      </div>
    </div>
  </section>
);
