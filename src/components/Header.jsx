import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/content";

const links = [
  { label: "Work", to: "/#work" },
  { label: "ERP", to: "/#erp" },
  { label: "Research", to: "/#research" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-2xl leading-none" onClick={() => setOpen(false)}>
          {profile.short}
          <span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="label transition-colors hover:text-primary">
              {l.label}
            </Link>
          ))}
          <a href={profile.resume} download className="btn !px-4 !py-2">
            Résumé
          </a>
        </nav>

        <button
          className="md:hidden p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="wrap flex flex-col border-t border-border pb-4 md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 font-display text-3xl"
            >
              {l.label}
            </Link>
          ))}
          <a href={profile.resume} download className="label pt-4">
            Download résumé ↓
          </a>
        </nav>
      )}
    </header>
  );
};
