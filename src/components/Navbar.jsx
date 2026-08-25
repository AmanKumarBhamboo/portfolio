import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const leftItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Now", href: "#now" },
];

const rightItems = [
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Contact", href: "#contact" },
];

const allItems = [...leftItems, ...rightItems];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const linkClass = () =>
    "relative text-xs uppercase tracking-[0.2em] font-mono text-foreground/60 transition-colors duration-300 hover:text-foreground pb-1";

  const activeBar = (href) =>
    activeSection === href.substring(1)
      ? "text-foreground after:absolute after:-bottom-0 after:left-0 after:w-full after:h-px after:bg-primary"
      : "";

  return (
    <nav className="fixed w-full z-40 bg-secondary/70 backdrop-blur-md border-b border-border/60">
      <div className="container flex items-center gap-6 py-3">
        {/* Terminal window dots */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
        </div>

        {/* Privacy note */}
        <span className="hidden lg:inline text-[10px] uppercase tracking-widest font-mono text-muted-foreground/50 shrink-0">
          no cookies stored
        </span>

        {/* Left nav items */}
        <div className="hidden md:flex items-center space-x-8 flex-1">
          {leftItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={linkClass(item.href) + " " + activeBar(item.href)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Center name */}
        <a
          href="#hero"
          className="font-mono text-sm md:text-base tracking-wide text-foreground shrink-0 mx-auto md:mx-0"
        >
          <span className="text-primary">aman</span>
          <span className="text-muted-foreground">@</span>
          bhamboo
          <span className="text-primary">:~$</span>
        </a>

        {/* Right nav items */}
        <div className="hidden md:flex items-center space-x-8 flex-1 justify-end">
          {rightItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={linkClass(item.href) + " " + activeBar(item.href)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 ml-auto"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 h-[100dvh] w-screen bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-lg">
          {allItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={linkClass(item.href) + " " + activeBar(item.href)}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
