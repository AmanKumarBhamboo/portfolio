import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import { Section } from "../Section";
import { Reveal } from "../Reveal";

export const Work = () => (
  <Section id="work" index="01 — Selected work" title="Dashboards that answer the question.">
    <ul className="border-t border-foreground">
      {projects.map((p, i) => (
        <Reveal as="li" key={p.slug} delay={i * 80} className="border-b border-border">
          <Link
            to={`/work/${p.slug}`}
            className="group grid gap-3 py-8 md:grid-cols-[3rem_1fr_auto] md:gap-6"
          >
            <span className="label md:pt-2">{p.n}</span>
            <div>
              <h3 className="text-3xl leading-tight transition-colors group-hover:text-primary md:text-4xl">
                {p.title}
              </h3>
              <p className="mt-3 max-w-xl text-muted-foreground">{p.summary}</p>
              <p className="label mt-4">{p.tools.join(" · ")}</p>
            </div>
            <ArrowUpRight
              className="hidden shrink-0 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary md:block"
              size={28}
            />
          </Link>
        </Reveal>
      ))}
    </ul>
  </Section>
);
