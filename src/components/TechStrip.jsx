import {
  SiPython, SiPandas, SiNumpy, SiPostgresql, SiMysql,
  SiGit, SiGithub, SiJupyter, SiRust,
} from "react-icons/si";
import { BarChart3, Database, Box, LineChart, Search, GitBranch, FileSpreadsheet, TerminalSquare, Cpu } from "lucide-react";

const techs = [
  { label: "Rust", icon: SiRust, color: "#CE422B" },
  { label: "Systems Programming", icon: Cpu, color: "#8b8b8b" },
  { label: "Python", icon: SiPython, color: "#3776AB" },
  { label: "Pandas", icon: SiPandas, color: "#150458" },
  { label: "NumPy", icon: SiNumpy, color: "#013243" },
  { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { label: "MySQL", icon: SiMysql, color: "#4479A1" },
  { label: "Tableau", icon: BarChart3, color: "#E97627" },
  { label: "ETL Pipelines", icon: GitBranch, color: "#555" },
  { label: "Advanced Excel", icon: FileSpreadsheet, color: "#217346" },
  { label: "Matplotlib", icon: BarChart3, color: "#11557C" },
  { label: "Seaborn", icon: LineChart, color: "#4C72B0" },
  { label: "Git", icon: SiGit, color: "#F05032" },
  { label: "GitHub", icon: SiGithub, color: "#181717" },
  { label: "Jupyter", icon: SiJupyter, color: "#F37626" },
  { label: "CLI Tooling", icon: TerminalSquare, color: "#8b8b8b" },
  { label: "EDA", icon: Search, color: "#555" },
  { label: "Statistical Analysis", icon: BarChart3, color: "#555" },
  { label: "Data Modeling", icon: Database, color: "#555" },
  { label: "Power Query", icon: Box, color: "#555" },
];

export const TechStrip = () => (
  <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-8 border-y border-border/60">
    <div className="flex gap-6 animate-scroll" style={{ willChange: "transform" }}>
      {[...techs, ...techs].map((t, i) => (
        <div
          key={i}
          className="group shrink-0 flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-wider font-medium border border-border/60 text-muted-foreground whitespace-nowrap transition-colors duration-300 hover:border-primary/50 hover:text-foreground"
        >
          <t.icon
            className="h-4 w-4 shrink-0 grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
            style={{ color: t.color }}
          />
          {t.label}
        </div>
      ))}
    </div>
  </div>
);
