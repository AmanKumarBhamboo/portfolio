import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { TerminalWindow } from "./TerminalWindow";

const skills = [
  {
    name: "Rust (Ownership & Borrowing)",
    level: 55,
    category: "rust_systems",
    projects: "Working through Rustlings exercises — ownership, lifetimes, traits, and pattern matching."
  },
  {
    name: "Systems Programming Fundamentals",
    level: 45,
    category: "rust_systems",
    projects: "Building a TCP/HTTP server from scratch in Rust via the CodeCrafters challenge — sockets, HTTP/1.1 parsing, and concurrency."
  },
  {
    name: "CLI & Tooling in Rust",
    level: 40,
    category: "rust_systems",
    projects: "Writing small command-line utilities to internalize the borrow checker and Rust's error-handling patterns."
  },
  {
    name: "Python (Pandas & NumPy)",
    level: 92,
    category: "analysis",
    projects: "Cleaned 9 raw CSVs for Brazilian E-commerce; Built LAPD Crime config-driven Python ETL pipeline."
  },
  {
    name: "Exploratory Data Analysis (EDA)",
    level: 90,
    category: "analysis",
    projects: "Uncovered peak crime hours & weapon patterns across 28 attributes in 3.1M LAPD records."
  },
  {
    name: "Cohort & Retention Analysis",
    level: 88,
    category: "analysis",
    projects: "Pinpointed 70% churn within 30 days using cohort pivot queries to design retention strategies."
  },
  {
    name: "Business Metric Design",
    level: 85,
    category: "analysis",
    projects: "Tracked and computed core KPIs: CRR, RPR, LTV, CSAT, and NPS from raw marketplace order data."
  },
  {
    name: "Advanced SQL (PostgreSQL/MySQL)",
    level: 90,
    category: "sql_bi",
    projects: "Computed LTV & CRR via Window Functions, CTEs, and cohort pivot queries on large datasets."
  },
  {
    name: "Tableau (Data Storytelling)",
    level: 88,
    category: "sql_bi",
    projects: "Built 4-page executive dashboards with LOD expressions & parameter actions for 1GB+ datasets."
  },
  {
    name: "Data Modeling",
    level: 82,
    category: "sql_bi",
    projects: "Normalized fragmented raw schemas into structured PostgreSQL databases for analytical workflows."
  },
  {
    name: "ETL Pipeline Development",
    level: 85,
    category: "etl_excel",
    projects: "Engineered YAML-driven Python pipeline processing 3.1M records, cutting data prep to under 6 mins."
  },
  {
    name: "Advanced Excel",
    level: 85,
    category: "etl_excel",
    projects: "Proficient in VLOOKUPs, INDEX/MATCH, Pivot Tables, and Power Query for quick data manipulation."
  },
  {
    name: "Spatial & Trend Analysis",
    level: 83,
    category: "etl_excel",
    projects: "Identified geographic hotspots via LAT/LON spatial clustering and regional fulfillment bottlenecks."
  },
  {
    name: "Matplotlib & Seaborn",
    level: 85,
    category: "tools",
    projects: "Visualized demographic distributions, crime trends, and statistical insights during EDA."
  },
  {
    name: "Statistical Analysis & Research",
    level: 85,
    category: "tools",
    projects: "IEEE STCR 2025 published paper benchmarking MRI dataset architectures across computational efficiency."
  },
  {
    name: "Git, GitHub & Jupyter",
    level: 88,
    category: "tools",
    projects: "Version control for pipeline scripts, analytics repositories, and shared interactive notebooks."
  }
];

const categories = ["all", "rust_systems", "analysis", "sql_bi", "etl_excel", "tools"];

const TILE_COUNT = 3;

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredSkills = skills.filter((skill) => {
    return activeCategory === "all" || skill.category === activeCategory;
  });

  useEffect(() => {
    setStartIndex(0);
    setIsAnimating(false);
  }, [activeCategory]);

  useEffect(() => {
    if (filteredSkills.length <= TILE_COUNT) return;

    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setStartIndex((prev) => (prev + TILE_COUNT) % filteredSkills.length);
        setIsAnimating(false);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, [filteredSkills.length, activeCategory]);

  const visibleSkills =
    filteredSkills.length <= TILE_COUNT
      ? filteredSkills
      : Array.from({ length: TILE_COUNT }).map((_, i) => {
        return filteredSkills[(startIndex + i) % filteredSkills.length];
      });

  return (
    <section id="skills" className="h-screen py-14 px-4 relative bg-card/30 flex flex-col items-center justify-center overflow-y-auto snap-start snap-always">
      <div className="container mx-auto max-w-5xl w-full">
        <Reveal className="text-center mb-16">
          <span className="eyebrow text-center">Capabilities</span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal">My Skills</h2>
        </Reveal>

        <Reveal className="flex flex-wrap justify-center gap-8 mb-10">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "relative pb-2 text-xs uppercase tracking-[0.2em] capitalize transition-colors duration-300 font-mono",
                activeCategory === category
                  ? "text-foreground after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              --{category === "sql_bi"
                ? "sql-bi"
                : category === "etl_excel"
                ? "etl-excel"
                : category === "rust_systems"
                ? "rust-systems"
                : category}
            </button>
          ))}
        </Reveal>

        <Reveal delay={80}>
          <TerminalWindow title="aman@bhamboo — ~/skills" className="mb-6">
            <p className="text-primary">
              <span className="mr-2">$</span>ls skills/ --filter={activeCategory}
            </p>
          </TerminalWindow>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {visibleSkills.map((skill, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <Reveal
                key={index}
                delay={index * 80}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "panel h-[250px] flex flex-col cursor-default transition-colors duration-500",
                  isHovered && "border-primary/50"
                )}
              >
                <div
                  key={`${skill.name}-${startIndex}`}
                  className={cn(
                    "flex-1 flex flex-col p-6 transition-opacity duration-500 font-mono",
                    isAnimating ? "opacity-0" : "opacity-100"
                  )}
                >
                  <div className="text-left mb-4">
                    <h3 className="font-serif text-lg tracking-tight line-clamp-1">
                      <span className="text-primary mr-1">›</span>
                      {skill.name}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/50">
                    <p
                      className="text-xs break-words leading-relaxed line-clamp-3 text-muted-foreground"
                      title={skill.projects}
                    >
                      <strong className="font-medium text-foreground/80">
                        {skill.category === "rust_systems" ? "// learning: " : "// impact: "}
                      </strong>
                      {skill.projects}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
