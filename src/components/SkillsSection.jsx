import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Data Analysis
  { 
    name: "Python", 
    level: 90, 
    category: "analysis",
    projects: "Brain MRI Segmentation, Titanic Survival Prediction, House Prices Prediction" 
  },
  { 
    name: "Pandas", 
    level: 90, 
    category: "analysis",
    projects: "Titanic Kaggle, House Prices Kaggle, Brain MRI Dataset Handling"
  },
  { 
    name: "NumPy", 
    level: 85, 
    category: "analysis",
    projects: "All ML/DL projects (numerical operations, array manipulation)"
  },
  { 
    name: "Exploratory Data Analysis (EDA)", 
    level: 90, 
    category: "analysis",
    projects: "Titanic Kaggle, House Prices Kaggle, Brain MRI Dataset Analysis"
  },
  { 
    name: "Data Cleaning & Preprocessing", 
    level: 88, 
    category: "analysis",
    projects: "Titanic Kaggle, House Prices Kaggle, Brain MRI Segmentation"
  },

  // Machine Learning & Research
  { 
    name: "Machine Learning", 
    level: 80, 
    category: "ml",
    projects: "Titanic Survival Prediction, House Prices Prediction"
  },
  { 
    name: "Scikit-learn", 
    level: 80, 
    category: "ml",
    projects: "Titanic Kaggle (Random Forest), House Prices Kaggle"
  },
  { 
    name: "Deep Learning (Basics)", 
    level: 70, 
    category: "ml",
    projects: "Brain MRI Tumor Segmentation (U-Net, CNN fundamentals)"
  },
  { 
    name: "Statistical Analysis", 
    level: 85, 
    category: "ml",
    projects: "Titanic Kaggle, Brain MRI Project (uncertainty estimation)"
  },
  { 
    name: "Research Methodologies", 
    level: 85, 
    category: "ml",
    projects: "Brain MRI Segmentation (IEEE-format research paper)"
  },

  // Databases & Querying
  { 
    name: "SQL", 
    level: 85, 
    category: "database",
    projects: "Conceptual usage in data querying and analysis workflows"
  },
  { 
    name: "MySQL / PostgreSQL", 
    level: 75, 
    category: "database",
    projects: "Database schema understanding and data modeling concepts"
  },
  { 
    name: "Data Modeling", 
    level: 75, 
    category: "database",
    projects: "Portfolio backend & AI project database design"
  },

  // Tools & Visualization
  { 
    name: "Matplotlib / Seaborn", 
    level: 85, 
    category: "tools",
    projects: "Titanic Kaggle, House Prices Kaggle, Brain MRI visualizations"
  },
  { 
    name: "Power BI / Tableau (Basics)", 
    level: 70, 
    category: "tools",
    projects: "Exploratory dashboards and visualization practice"
  },
  { 
    name: "Git & GitHub", 
    level: 85, 
    category: "tools",
    projects: "All projects (version control, collaboration, experiment tracking)"
  },
  { 
    name: "Jupyter Notebook", 
    level: 90, 
    category: "tools",
    projects: "All data analysis, machine learning, and deep learning experimentation"
  },
];

const categories = ["all", "analysis", "ml", "database", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredSkills = skills.filter((skill) => {
    return activeCategory === "all" || skill.category === activeCategory;
  });

  // Reset rotation when category changes
  useEffect(() => {
    setStartIndex(0);
    setIsAnimating(false);
  }, [activeCategory]);

  // Rotation interval
  useEffect(() => {
    if (filteredSkills.length <= 6) return;

    const interval = setInterval(() => {
      setIsAnimating(true); // Start fade out

      setTimeout(() => {
        setStartIndex((prev) => (prev + 6) % filteredSkills.length);
        setIsAnimating(false); // Start fade in (after swap)
      }, 600); // 600ms matching the flip-out duration
    }, 3000); // Interval

    return () => clearInterval(interval);
  }, [filteredSkills.length, activeCategory]);

  // Derive visible skills with wrap-around logic
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
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover h-[250px] flex flex-col overflow-hidden perspective-1000"
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
                  <h3 className="font-semibold text-lg text-primary">
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
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-border/50">
                  <p className="text-xs text-foreground/80 break-words leading-relaxed line-clamp-2" title={skill.projects}>
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
