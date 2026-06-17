import { useState } from "react";
import { ArrowLeft, ArrowRight, MapPin, ShoppingCart, TrendingDown, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "LA Crime Analysis",
    icon: MapPin,
    image: "/projects/project1.png",
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
    image: "/projects/project2.png",
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
    image: "/projects/project3.png",
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

  const hoverColors = {
    1: "#2962ff",
    2: "#1a4fbf",
    3: "#0d47a1",
  };

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
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {activeId ? (
          <div className="flex gap-8 lg:gap-16">
            <div className="hidden md:flex md:w-48 lg:w-56 shrink-0 flex-col gap-6 pt-2">
              <h2 className="text-2xl lg:text-3xl font-bold">
                Featured <span className="text-primary">Projects</span>
              </h2>
              {detailData && (() => {
                const Icon = detailData.icon;
                return (
                  <>
                    <div className="flex items-center gap-3 md:flex-col md:items-start">
                      <div className="p-3 rounded-full bg-primary/10 shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-semibold">{detailData.title}</h3>
                        <span className="text-xs text-muted-foreground">
                          Project {detailData.id} of {projects.length}
                        </span>
                      </div>
                    </div>
                    <div className="border border-border/40 rounded-lg p-4 shadow-xs space-y-3">
                      <a
                        href={detailData.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        Github
                      </a>
                      <a
                        href={detailData.tableauUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Tableau
                      </a>
                    </div>
                  </>
                );
              })()}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-3xl font-bold mb-10 text-center md:hidden">
                Featured <span className="text-primary">Projects</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="grid grid-cols-1">
              <div
                className={`col-start-1 row-start-1 transition-all duration-200 ease-out ${
                  listLeaving
                    ? "opacity-0 scale-[0.98] pointer-events-none"
                    : "opacity-100 scale-100"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      onMouseEnter={() => setHoveredId(project.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className="group rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.03]"
                      style={{
                        backgroundColor: hoveredId === project.id ? hoverColors[project.id] : "rgba(255,255,255,0.6)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid",
                        borderColor: hoveredId === project.id ? hoverColors[project.id] : "rgba(238,235,229,0.8)",
                        boxShadow: hoveredId === project.id
                          ? `0 8px 32px ${hoverColors[project.id]}33`
                          : "0 1px 3px rgba(0,0,0,0.04)",
                        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      <div onClick={() => openDetail(project.id)}>
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={project.image}
                            alt={`${project.title} - Aman Bhamboo`}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-base"
                            style={{
                              color: hoveredId === project.id ? "#fff" : undefined,
                              transition: "color 0.3s ease",
                            }}
                          >{project.title}</h3>
                        </div>
                      </div>
                      <div className="px-4 pb-4 flex gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-xs transition-colors"
                          style={{
                            color: hoveredId === project.id ? "rgba(255,255,255,0.8)" : "rgba(36,39,44,0.6)",
                          }}
                        >
                          <Github className="h-3.5 w-3.5" />
                          Github
                        </a>
                        <a
                          href={project.tableauUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 text-xs transition-colors"
                          style={{
                            color: hoveredId === project.id ? "rgba(255,255,255,0.8)" : "rgba(36,39,44,0.6)",
                          }}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Tableau
                        </a>
                      </div>
                    </div>
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
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-card rounded-lg shadow-xs border border-border/40 overflow-hidden">
        <div className="p-8 space-y-6">
          <div>
            <h4 className="font-semibold text-base mb-2 text-primary">The Simple Story</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.summary}</p>
            <div className="mt-3 bg-primary/5 border border-primary/10 rounded-lg p-4">
              <p className="text-sm font-medium text-foreground/80">
                <span className="text-primary">Impact: </span>
                {project.impact}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-base mb-2 text-primary">Scope</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.scope}</p>
          </div>

          <div>
            <h4 className="font-semibold text-base mb-3 text-primary">Key Numbers</h4>
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
            <h4 className="font-semibold text-base mb-3 text-primary">Skills Used</h4>
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
              className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              Next Project
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
