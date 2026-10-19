import { ArrowUpRight } from "lucide-react";
import { papers } from "@/data/content";
import { Section } from "../Section";
import { Reveal } from "../Reveal";

export const Research = () => (
  <Section id="research" index="03 — Research" title="Published, and peer reviewed.">
    <div className="space-y-12">
      {papers.map((p, i) => (
        <Reveal key={p.doi} delay={i * 80} className="border-t border-foreground pt-6">
          <p className="label">{p.venue}</p>
          <h3 className="mt-3 text-2xl leading-snug md:text-3xl">{p.title}</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            {p.venueFull} · <span className="text-foreground">{p.role}</span>
          </p>

          <dl className="mt-6 grid gap-6 md:grid-cols-3">
            {p.contributions.map((c) => (
              <div key={c.heading}>
                <dt className="label !text-foreground">{c.heading}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</dd>
              </div>
            ))}
          </dl>

          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="label link-u mt-6 inline-flex items-center gap-1"
          >
            DOI {p.doi} <ArrowUpRight size={14} />
          </a>
        </Reveal>
      ))}
    </div>
  </Section>
);
