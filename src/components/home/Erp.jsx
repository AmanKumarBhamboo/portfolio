import { erp } from "@/data/content";
import { Section } from "../Section";
import { Reveal } from "../Reveal";

export const Erp = () => (
  <Section id="erp" index="02 — ERP analytics" title="Where the business data lives.">
    <Reveal>
      <p className="label">{erp.system}</p>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">{erp.intro}</p>

      <dl className="mt-10 border-t border-foreground">
        {erp.areas.map((a, i) => (
          <div key={a.title} className="grid gap-2 border-b border-border py-6 md:grid-cols-[3rem_14rem_1fr] md:gap-6">
            <span className="label md:pt-1">{String(i + 1).padStart(2, "0")}</span>
            <dt className="font-display text-2xl">{a.title}</dt>
            <dd className="text-muted-foreground">{a.text}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  </Section>
);
