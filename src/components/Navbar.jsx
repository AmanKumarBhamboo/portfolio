import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const leftItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
];

const rightItems = [
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
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const linkClass = () =>
    "relative font-bold text-foreground/80 transition-all duration-100 hover:scale-110 hover:text-primary";

  const activeBar = (href) =>
    activeSection === href.substring(1)
      ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:rounded-full after:bg-primary after:transition-all after:duration-100"
      : "";

  return (
    <nav className="fixed w-full z-40 pt-4 bg-background shadow-xs">
      <div className="container flex items-center justify-between pb-3">
        {/* Left nav items */}
        <div className="hidden md:flex items-center space-x-8">
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
        <a href="#hero" className="text-xl font-bold">
          <span className="text-foreground">Aman </span>
          <span className="text-primary">Bhamboo</span>
        </a>

        {/* Right nav items */}
        <div className="hidden md:flex items-center space-x-8">
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
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
        <div className="flex flex-col space-y-8 text-xl">
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
