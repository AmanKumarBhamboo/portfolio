import { skillGroups } from "@/data/content";
import { Section } from "../Section";
import { Reveal } from "../Reveal";

export const About = () => (
  <Section id="about" index="04 — About" title="Insight first, tooling second.">
    <Reveal className="max-w-2xl space-y-5 text-lg md:text-xl">
      <p>
        I&rsquo;m a data analyst and researcher who enjoys extracting insight, spotting patterns, and
        turning complex data into clear, actionable knowledge.
      </p>
      <p className="text-muted-foreground">
        Lately that also means going deep on Rust and systems programming — understanding how
        memory, concurrency and performance work closer to the metal, and using that mindset to
        write faster, more reliable data tooling.
      </p>
    </Reveal>

    <div className="mt-20 grid gap-x-12 gap-y-14 md:grid-cols-2">
      {skillGroups.map((g, i) => (
        <Reveal key={g.title} delay={(i % 2) * 80}>
          <h3 className="label border-b border-foreground pb-3 !text-foreground">{g.title}</h3>
          <ul className="divide-y divide-border">
            {g.items.map((it) => (
              <li key={it.name} className="py-4">
                <p className="font-medium">{it.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{it.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </Section>
);
