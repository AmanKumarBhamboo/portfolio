import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/content";

export const Project = () => {
  const { slug } = useParams();
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) return <Navigate to="/404" replace />;

  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <article className="pb-20 pt-10 md:pt-16">
      <Helmet>
        <title>{p.title} — Aman Kumar Bhamboo</title>
        <meta name="description" content={p.summary} />
      </Helmet>

      <div className="wrap">
        <Link to="/#work" className="label inline-flex items-center gap-2 transition-colors hover:text-primary">
          <ArrowLeft size={14} /> All work
        </Link>

        <p className="label mt-12">{p.n} · {p.kind} · {p.year}</p>
        <h1 className="mt-4 max-w-4xl text-5xl leading-[1.02] md:text-8xl">{p.title}</h1>
        <p className="mt-8 max-w-2xl text-xl text-muted-foreground">{p.summary}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={p.tableauUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Live dashboard <ArrowUpRight size={14} />
          </a>
          <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn">
            <Github size={14} /> Source
          </a>
        </div>

        <dl className="mt-16 grid border-t border-foreground sm:grid-cols-2 lg:grid-cols-4">
          {p.metrics.map((m, idx) => (
            <div
              key={m.k}
              className={`border-b border-border py-6 sm:pr-6 ${idx > 0 ? "lg:border-l lg:pl-6" : ""}`}
            >
              <dt className="font-display text-4xl md:text-5xl">{m.k}</dt>
              <dd className="mt-2 text-sm text-muted-foreground">{m.v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <section className="md:col-span-4">
            <h2 className="label">Scope</h2>
            <p className="mt-3 text-lg">{p.scope}</p>
          </section>
          <section className="md:col-span-4">
            <h2 className="label">Impact</h2>
            <p className="mt-3 text-lg">{p.impact}</p>
          </section>
          <section className="md:col-span-4">
            <h2 className="label">Skills used</h2>
            <ul className="mt-3 space-y-3 text-muted-foreground">
              {p.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="label mt-6">{p.tools.join(" · ")}</p>
          </section>
        </div>

        <Link
          to={`/work/${next.slug}`}
          className="group mt-24 flex items-end justify-between gap-6 border-t border-foreground pt-6"
        >
          <div>
            <p className="label">Next project</p>
            <p className="mt-2 text-3xl transition-colors group-hover:text-primary md:text-5xl font-display">
              {next.title}
            </p>
          </div>
          <ArrowRight className="mb-2 shrink-0 transition-transform group-hover:translate-x-1" size={32} />
        </Link>
      </div>
    </article>
  );
};
