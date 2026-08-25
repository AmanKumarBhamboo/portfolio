import { Check, Circle } from "lucide-react";
import { Reveal } from "./Reveal";
import { TerminalWindow } from "./TerminalWindow";

const log = [
  { done: true, text: "Ownership, borrowing & lifetimes" },
  { done: true, text: "Structs, enums & pattern matching" },
  { done: true, text: "Error handling (Result / Option / the ? operator)" },
  { done: false, text: "Building a TCP/HTTP server from scratch (CodeCrafters)" },
  { done: false, text: "Concurrency & async Rust" },
  { done: false, text: "Small CLI tools with Clap" },
];

export const NowSection = () => {
  return (
    <section id="now" className="h-screen py-14 px-4 relative bg-card/30 flex flex-col items-center justify-center overflow-y-auto snap-start snap-always">
      <div className="container mx-auto max-w-5xl w-full">
        <Reveal className="text-center mb-16">
          <span className="eyebrow text-center">currently</span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal">Now Building</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
            Alongside data work, I&apos;m going deep on Rust and systems programming —
            learning how memory, concurrency, and performance work closer to the metal.
          </p>
        </Reveal>

        <Reveal className="max-w-xl mx-auto" delay={100}>
          <TerminalWindow title="~/learning/rust — progress.log">
            <div className="space-y-3">
              {log.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  {item.done ? (
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground/50 mt-0.5 shrink-0" />
                  )}
                  <span
                    className={
                      item.done
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </TerminalWindow>
        </Reveal>
      </div>
    </section>
  );
};
