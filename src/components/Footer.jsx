import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-background relative border-t border-border/60 flex flex-wrap justify-between items-center snap-end snap-always">
      <p className="text-xs uppercase tracking-wider font-mono text-muted-foreground">
        <span className="text-primary">$</span> echo &quot;&copy; {new Date().getFullYear()} Aman Kumar Bhamboo&quot;
      </p>
      <a
        href="#hero"
        className="p-2 border border-border/60 hover:border-primary/50 text-primary transition-colors"
      >
        <ArrowUp size={18} />
      </a>
    </footer>
  );
};
