import { BarChart, Search, Database, Cpu } from "lucide-react";
import { Reveal } from "./Reveal";
import { TerminalWindow } from "./TerminalWindow";

const pillars = [
  {
    icon: BarChart,
    title: "data_analysis.rs",
    text: "Analyzing structured and unstructured data to uncover trends, patterns, and actionable insights.",
  },
  {
    icon: Search,
    title: "research_insights.rs",
    text: "Conducting in-depth research, validating findings, and transforming complex information into meaningful conclusions.",
  },
  {
    icon: Database,
    title: "data_modeling.rs",
    text: "Building data models and visualizations to communicate insights clearly and support data-driven decisions.",
  },
  {
    icon: Cpu,
    title: "systems_programming.rs",
    text: "Currently deep in Rust — ownership, memory safety, and building things closer to the machine, from network protocols to CLI tools.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="h-screen py-12 px-4 relative flex flex-col items-center justify-center overflow-y-auto snap-start snap-always">
      <div className="container mx-auto max-w-5xl w-full">
        <Reveal className="text-center mb-10">
          <span className="eyebrow text-center">Profile</span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal">About Me</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <Reveal className="text-left">
            <TerminalWindow title="aman@bhamboo — ~/about">
              <p className="text-primary mb-3">
                <span className="mr-2">$</span>cat about.md
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I’m a data analyst and researcher passionate about extracting insights,
                  analyzing patterns, and transforming complex data into clear, meaningful,
                  and actionable knowledge.
                </p>
                <p>
                  Lately that means going deep on Rust and systems programming — learning
                  how memory, concurrency, and performance work closer to the metal, and
                  using that mindset to write faster, more reliable data tooling.
                </p>
              </div>
              <p className="text-primary mt-5">
                <span className="mr-2">$</span>./download-cv.sh
              </p>
            </TerminalWindow>

            <div className="pt-6">
              <a
                href="/Aman_Kumar_Bhamboo_Resume.pdf"
                download
                className="btn-outline"
              >
                Download CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="text-left">
            <TerminalWindow title="aman@bhamboo — ~/about/expertise">
              <p className="text-primary mb-3">
                <span className="mr-2">$</span>ls -la ./expertise
              </p>
              <div className="divide-y divide-border/50">
                {pillars.map((p) => (
                  <div key={p.title} className="flex items-start gap-3 py-2 first:pt-0 last:pb-0">
                    <p.icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <div className="text-foreground">{p.title}</div>
                      <div className="text-muted-foreground text-xs leading-relaxed mt-1">
                        {p.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TerminalWindow>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
