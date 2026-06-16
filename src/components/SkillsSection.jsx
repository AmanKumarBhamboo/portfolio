import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Data Analysis & Core Analytics
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

  // SQL & Business Intelligence
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

  // Data Engineering & Excel
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

  // Tools & Research
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

// Updated categories to match the Data Analyst profile
const categories = ["all", "analysis", "sql_bi", "etl_excel", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredSkills = skills.filter((skill) => {
    return activeCategory === "all" || skill.category === activeCategory;
  });

  useEffect(() => {
    setStartIndex(0);
    setIsAnimating(false);
  }, [activeCategory]);

  useEffect(() => {
    if (filteredSkills.length <= 6) return;

    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setStartIndex((prev) => (prev + 6) % filteredSkills.length);
        setIsAnimating(false);
      }, 600);
    }, 3000);

    return () => clearInterval(interval);
  }, [filteredSkills.length, activeCategory]);

  const visibleSkills =
      filteredSkills.length <= 6
          ? filteredSkills
          : Array.from({ length: 6 }).map((_, i) => {
            return filteredSkills[(startIndex + i) % filteredSkills.length];
          });

  return (
      <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary">Skills</span>
          </h2>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
                <button
                    key={key}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300 capitalize text-sm font-medium",
                        activeCategory === category
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary/70 text-foreground hover:bg-secondary"
                    )}
                >
                  {category === "sql_bi" ? "SQL & BI" : category === "etl_excel" ? "ETL & Excel" : category}
                </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleSkills.map((skill, index) => (
                <div
                    key={index}
                    className="bg-card p-6 rounded-lg shadow-xs card-hover h-[250px] flex flex-col overflow-hidden perspective-1000 border border-border/40"
                >
                  <div
                      key={`${skill.name}-${startIndex}`}
                      className={cn(
                          "flex-1 flex flex-col",
                          isAnimating ? "animate-flip-out" : "animate-flip-in"
                      )}
                      style={{
                        animationDelay: "0ms",
                      }}
                  >
                    <div className="text-left mb-4">
                      <h3 className="font-semibold text-base md:text-lg text-primary tracking-tight line-clamp-1">
                        {skill.name}
                      </h3>
                    </div>

                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                      <div
                          className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                          style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    <div className="text-right mt-1 mb-auto">
                  <span className="text-xs text-muted-foreground font-mono">
                    {skill.level}%
                  </span>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/50">
                      <p className="text-xs text-foreground/80 break-words leading-relaxed line-clamp-3" title={skill.projects}>
                        <strong className="text-foreground/90 font-medium">Impact: </strong>
                        {skill.projects}
                      </p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};