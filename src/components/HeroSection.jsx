import { TechStrip } from "./TechStrip";
import { TerminalWindow } from "./TerminalWindow";
import { Typewriter } from "./Typewriter";

const introLines = [
  { prompt: "$", text: "whoami" },
  { text: "Aman Bhamboo — Data Analyst & Researcher" },
  { prompt: "$", text: "cat currently.txt" },
  { text: "Going deep on Rust & systems programming — ownership, memory," },
  { text: "and building things closer to the machine." },
];

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center px-4 overflow-y-auto snap-start snap-always"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 text-center md:text-left">
            <span className="eyebrow opacity-0 animate-fade-in">
              Data Analyst &amp; Researcher
            </span>

            <h1 className="font-serif text-5xl md:text-7xl font-normal tracking-tight opacity-0 animate-fade-in-delay-1">
              Aman Bhamboo
            </h1>

            <div className="opacity-0 animate-fade-in-delay-2 max-w-xl mx-auto md:mx-0 text-left relative">
              <div
                className="absolute -inset-8 md:-inset-12 bg-primary/25 blur-3xl rounded-full -z-10"
                aria-hidden="true"
              />
              <TerminalWindow
                title="aman@bhamboo — zsh"
                className="shadow-[0_0_90px_-20px_hsl(var(--primary)/0.55)]"
                bodyClassName="h-56 overflow-hidden"
              >
                <Typewriter lines={introLines} />
              </TerminalWindow>
            </div>

            <div className="pt-4 opacity-0 animate-fade-in-delay-3">
              <a href="#projects" className="btn-outline">
                View My Work
              </a>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-delay-2 flex justify-center md:justify-end mt-4 md:mt-10">
            <div className="relative">
              <div
                className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full"
                aria-hidden="true"
              />
              <img
                src="/background.png"
                alt="Illustrated avatar of Aman Bhamboo at a terminal"
                className="relative max-h-[360px] sm:max-h-[440px] md:max-h-[560px] w-auto object-contain drop-shadow-[0_0_50px_hsl(var(--primary)/0.3)]"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 55%, transparent 92%)",
                  maskImage:
                    "linear-gradient(to bottom, black 55%, transparent 92%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 opacity-0 animate-fade-in-delay-4">
          <TechStrip />
        </div>
      </div>
    </section>
  );
};
