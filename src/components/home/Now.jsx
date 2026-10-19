import { Check, Circle } from "lucide-react";
import { rust } from "@/data/content";
import { Section } from "../Section";
import { Reveal } from "../Reveal";

export const Now = () => (
  <Section id="now" index="06 — Now" title="Currently learning Rust.">
    <Reveal>
      <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">{rust.intro}</p>
      <ul className="mt-10 grid border-t border-foreground sm:grid-cols-2 sm:gap-x-12">
        {rust.log.map((item) => (
          <li key={item.text} className="flex items-start gap-3 border-b border-border py-4">
            {item.done ? (
              <Check size={18} className="mt-1 shrink-0 text-primary" aria-label="Done" />
            ) : (
              <Circle size={18} className="mt-1 shrink-0 text-muted-foreground/50" aria-label="In progress" />
            )}
            <span className={item.done ? "" : "text-muted-foreground"}>{item.text}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  </Section>
);
