import { useEffect, useState } from "react";
import { TechStrip } from "./TechStrip";

const TYPING_SPEED = 130;
const ERASE_SPEED = 30;
const PAUSE = 2000;

const words = ["Aman Bhamboo", "Aman Bhamboo"];

export const HeroSection = () => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [charI, setCharI] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pausing, setPausing] = useState(false);

  useEffect(() => {
    const current = words[i];

    if (pausing) {
      const t = setTimeout(() => setPausing(false), PAUSE);
      return () => clearTimeout(t);
    }

    if (!deleting) {
      if (charI > current.length) {
        setPausing(true);
        setDeleting(true);
        return;
      }
      const t = setTimeout(() => {
        setText(current.slice(0, charI));
        setCharI((c) => c + 1);
      }, TYPING_SPEED);
      return () => clearTimeout(t);
    }

    if (charI < 0) {
      setDeleting(false);
      setI((p) => (p + 1) % words.length);
      setCharI(0);
      return;
    }
    const t = setTimeout(() => {
      setText(current.slice(0, charI));
      setCharI((c) => c - 1);
    }, ERASE_SPEED);
    return () => clearTimeout(t);
  }, [charI, deleting, i, pausing]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span>Hi, I&apos;m<br /></span>
            <span className="text-primary">{text}</span>
            <span className="inline-block w-[3px] h-[0.9em] bg-primary ml-1 align-middle animate-blink" />
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I extract meaningful insights from data using modern analytical tools.
            Specializing in analysis and research, I transform complex datasets into clear, actionable, and impactful outcomes.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>

          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>
            <TechStrip />
          </div>
        </div>
      </div>
    </section>
  );
};
