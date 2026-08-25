import { useEffect, useState } from "react";

export const Typewriter = ({ lines, speed = 6, lineDelay = 90, startDelay = 100 }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started || lineIndex >= lines.length) return;

    const current = lines[lineIndex].text;
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, lineDelay);
    return () => clearTimeout(t);
  }, [started, charIndex, lineIndex, lines, speed, lineDelay]);

  const finished = lineIndex >= lines.length;

  return (
    <div className="font-mono text-sm md:text-base leading-relaxed">
      {lines.slice(0, lineIndex).map((l, i) => (
        <div key={i}>
          {l.prompt && <span className="text-primary mr-2">{l.prompt}</span>}
          <span className={l.prompt ? "text-foreground" : "text-muted-foreground"}>{l.text}</span>
        </div>
      ))}
      {started && !finished && (
        <div>
          {lines[lineIndex].prompt && <span className="text-primary mr-2">{lines[lineIndex].prompt}</span>}
          <span className={lines[lineIndex].prompt ? "text-foreground" : "text-muted-foreground"}>
            {lines[lineIndex].text.slice(0, charIndex)}
          </span>
          <span className="terminal-cursor" />
        </div>
      )}
      {finished && <span className="terminal-cursor" />}
    </div>
  );
};
