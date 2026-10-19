import { profile } from "@/data/content";

export const Footer = () => (
  <footer className="border-t border-border">
    <div className="wrap flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
      <p className="label">
        © {new Date().getFullYear()} {profile.name}
      </p>
      <ul className="flex gap-6">
        {profile.socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" className="label link-u">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);
