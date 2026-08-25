import { useState } from "react";
import { ArrowLeft, ArrowRight, MapPin, ShoppingCart, TrendingDown, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { TerminalWindow } from "./TerminalWindow";

const projects = [
  {
    id: 1,
    title: "LA Crime Analysis",
    icon: MapPin,
    githubUrl: "https://github.com/AmanKumarBhamboo/la-crime-Analysis",
    tableauUrl: "https://public.tableau.com/app/profile/aman.bhamboo/viz/MappingCrimeinLosAngles/Dashboard1",
    summary: "A safety map and history book combined — analyzing 14 years of crime data across Los Angeles to show leaders and police exactly where, when, and to whom crimes are happening.",
    impact: "City planners and police can identify high-crime neighborhoods and times, enabling smarter patrol deployment and data-driven safety policies.",
    scope: "Tracking over 209,000 total crime incidents across Los Angeles from 2010 to 2024, covering demographics and time trends.",
    metrics: [
      "Total Incidents — 209,325 crimes tracked with a 24.54% period-over-period increase",
      "Victims by Gender & Race — demographic breakdown to identify targeted groups",
      "Time of Day Analysis — crimes grouped into Morning, Afternoon, Evening, Night",
      "Status of Crime — tracking arrests (adult/juvenile) vs. unresolved cases",
    ],
    skills: [
      "Geographic Mapping — plotting crime data on real-world maps",
      "Trend Tracking (Time-Series) — year-over-year monthly comparisons",
      "Thematic Dashboard Design — samurai/sword theme for engaging visualization",
    ],
  },
  {
    id: 2,
    title: "Olist Customer Churn / Executive Overview",
    icon: ShoppingCart,
    githubUrl: "https://github.com/AmanKumarBhamboo/olist_analytics",
    tableauUrl: "https://public.tableau.com/app/profile/aman.bhamboo/viz/OlistAnalyticsDashboard_17812419259250/OlistExecutiveOverview",
    summary: "A health check-up report for a massive online marketplace. Translating messy sales data into clear charts showing revenue, customer satisfaction, and order performance.",
    impact: "Executives can instantly spot sales drops or satisfaction issues and ask targeted questions — keeping the business alive and growing.",
    scope: "Handling nearly 100,000 total orders from over 96,000 unique customers.",
    metrics: [
      "Total Revenue — R$ 13,591,643.70 in Brazilian currency",
      "Average Order Value — R$ 136.68 per transaction",
      "Order Status Count — delivered (~100k) vs. canceled vs. stuck orders",
      "Review Scores — 1-to-5 star distribution (majority at 5 stars)",
    ],
    skills: [
      "E-commerce Business Analytics — understanding orders, shipping, and ratings",
      "Distribution Bar Charts — visualizing revenue by product category",
      "Seasonality Line Charts — identifying high vs. slow seasons across months",
    ],
  },
  {
    id: 3,
    title: "Discount Hurts? / Revenue Leakage Audit",
    icon: TrendingDown,
    githubUrl: "https://github.com/AmanKumarBhamboo/does_discount_hurt",
    tableauUrl: "https://public.tableau.com/app/profile/aman.bhamboo/viz/Discounthurts/CorporateRevenueLeakage",
    summary: "A digital detective that catches where money is secretly leaking out of a company due to excessive discounts by cashiers.",
    impact: "Visually proves that as discount percentage rises, profit plummets. Lists every clerk by name so managers can identify who is giving away too much.",
    scope: "Analyzing over ₹229 Billion in total sales across a corporate network.",
    metrics: [
      "Gross Revenue — ₹229.58B before any discounts",
      "Discount Erosion / Leakage — ₹11.48B lost to discounts",
      "Net Revenue — ₹218.10B actual money retained",
      "Avg Discount % & Orders per Clerk — tracking individual employee impact",
    ],
    skills: [
      "Financial & Fraud Auditing — tracking raw sales vs. actual profits",
      "Dual-Axis Combo Charting — overlaying line graphs on bar charts",
      "Root-Cause Grid Analysis — ranking employees to pinpoint problems",
    ],
  },
];

export const ProjectsSection = () => {
  const [activeId, setActiveId] = useState(null);
  const [detailData, setDetailData] = useState(null);
  const [detailVisible, setDetailVisible] = useState(false);
  const [listLeaving, setListLeaving] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const openDetail = (id) => {
    const p = projects.find((x) => x.id === id);
    setDetailData(p);
    setListLeaving(true);
    setTimeout(() => {
      setActiveId(id);
      setDetailVisible(true);
      setListLeaving(false);
    }, 200);
  };

  const closeDetail = () => {
    setDetailVisible(false);
    setTimeout(() => {
      setActiveId(null);
      setDetailData(null);
    }, 200);
  };

  const goNext = (id) => {
    setDetailVisible(false);
    setTimeout(() => {
      const p = projects.find((x) => x.id === id);
      setDetailData(p);
      setActiveId(id);
      setDetailVisible(true);
    }, 200);
  };

  return (
    <section id="projects" className="h-screen py-16 px-4 relative flex flex-col items-center justify-center overflow-y-auto snap-start snap-always">
      <div className="container mx-auto max-w-5xl w-full">
        {activeId ? (
          <div className="flex gap-8 lg:gap-16">
            <div className="hidden md:flex md:w-48 lg:w-56 shrink-0 flex-col gap-6 pt-2">
              <h2 className="font-serif text-2xl lg:text-3xl font-normal">
                Featured Projects
              </h2>
              {detailData && (() => {
                const Icon = detailData.icon;
                return (
                  <>
                    <div className="flex items-center gap-3 md:flex-col md:items-start">
                      <div className="p-3 border border-primary/30 shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-mono">{detailData.title}</h3>
                        <span className="text-xs text-muted-foreground font-mono">
                          project {detailData.id}/{projects.length}
                        </span>
                      </div>
                    </div>
                    <div className="border border-border/40 p-4 space-y-3 font-mono">
                      <a
                        href={detailData.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        github
                      </a>
                      <a
                        href={detailData.tableauUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        tableau
                      </a>
                    </div>
                  </>
                );
              })()}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-serif text-3xl font-normal mb-10 text-center md:hidden">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1">
                <div
                  className={`col-start-1 row-start-1 transition-all duration-200 ease-out ${
                    detailVisible
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-[0.98] pointer-events-none"
                  }`}
                >
                  <ProjectDetail
                    project={detailData}
                    onBack={closeDetail}
                    onNext={() => goNext(detailData.id === 3 ? 1 : detailData.id + 1)}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-16">
              <span className="eyebrow text-center">Selected Work</span>
              <h2 className="font-serif text-3xl md:text-5xl font-normal">Featured Projects</h2>
            </div>
            <Reveal className="mb-10 text-left max-w-xl mx-auto">
              <TerminalWindow title="aman@bhamboo — ~/projects">
                <p className="text-primary">
                  <span className="mr-2">$</span>ls -la ~/projects
                </p>
              </TerminalWindow>
            </Reveal>
            <div className="grid grid-cols-1">
              <div
                className={`col-start-1 row-start-1 transition-all duration-200 ease-out ${
                  listLeaving
                    ? "opacity-0 scale-[0.98] pointer-events-none"
                    : "opacity-100 scale-100"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {projects.map((project, i) => (
                    <Reveal
                      key={project.id}
                      delay={i * 100}
                      onMouseEnter={() => setHoveredId(project.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className={cn(
                        "group panel overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1",
                        hoveredId === project.id && "border-primary/50"
                      )}
                    >
                      <div onClick={() => openDetail(project.id)}>
                        <div className="p-5 flex items-start gap-4">
                          <div className="p-3 border border-primary/30 shrink-0 transition-colors duration-300 group-hover:border-primary/60">
                            <project.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <h3 className="font-serif text-lg truncate min-w-0">{project.title}</h3>
                              <span className="text-[10px] font-mono text-muted-foreground/60 shrink-0">
                                {String(i + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
                              </span>
                            </div>
                            <p className="text-xs font-mono text-muted-foreground/70 mt-1 truncate">
                              ~/projects/{project.title.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "")}.md
                            </p>
                          </div>
                        </div>
                        <p className="px-5 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                          {project.summary}
                        </p>
                      </div>
                      <div className="px-5 py-5 mt-2 flex gap-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
                        >
                          <Github className="h-3.5 w-3.5" />
                          Github
                        </a>
                        <a
                          href={project.tableauUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Tableau
                        </a>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const ProjectDetail = ({ project, onBack, onNext }) => {
  const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");

  return (
    <div className="max-w-5xl mx-auto text-left">
      <TerminalWindow title={`aman@bhamboo — ~/projects/${slug}.md`}>
        <div className="space-y-6">
          <div>
            <h4 className="font-serif text-lg mb-2 text-primary">The Simple Story</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.summary}</p>
            <div className="mt-3 bg-primary/5 border border-primary/10 rounded-lg p-4">
              <p className="text-sm font-medium text-foreground/80">
                <span className="text-primary">Impact: </span>
                {project.impact}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-2 text-primary">Scope</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.scope}</p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-3 text-primary">Key Numbers</h4>
            <div className="space-y-2">
              {project.metrics.map((m, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-3 text-primary">Skills Used</h4>
            <div className="space-y-2">
              {project.skills.map((s, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border/40">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </button>
            <button
              onClick={onNext}
              className="btn-solid"
            >
              Next Project
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
};
