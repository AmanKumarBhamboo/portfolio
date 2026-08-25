import { Helmet } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { NowSection } from "../components/NowSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { PublicationsSection } from "../components/PublicationsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { MatrixRain } from "@/components/MatrixRain";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Aman Kumar Bhamboo - Data Analyst & Researcher | Portfolio</title>
        <meta name="description" content="Data Analyst and Researcher specializing in Python, SQL, Tableau, and data visualization — now going deep on Rust and systems programming. Explore projects in brain MRI segmentation, ETL pipelines, and business intelligence by Aman Kumar Bhamboo." />
        <meta name="keywords" content="Aman Bhamboo, Aman Kumar Bhamboo, data analyst, Python, SQL, Tableau, Rust, systems programming, portfolio, data visualization, brain MRI, ETL, Jhunjhunu" />
        <meta property="og:title" content="Aman Kumar Bhamboo - Data Analyst & Researcher | Portfolio" />
        <meta property="og:description" content="Data Analyst and Researcher specializing in Python, SQL, Tableau, and data visualization — now going deep on Rust and systems programming." />
        <meta property="og:image" content="https://amanbhamboo.vercel.app/og-image.png" />
        <meta property="og:url" content="https://amanbhamboo.vercel.app/" />
        <meta name="twitter:title" content="Aman Kumar Bhamboo - Data Analyst & Researcher | Portfolio" />
        <meta name="twitter:description" content="Data Analyst and Researcher specializing in Python, SQL, Tableau, and data visualization — now going deep on Rust and systems programming." />
        <meta name="twitter:image" content="https://amanbhamboo.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen w-full text-foreground overflow-x-hidden">
      <MatrixRain />

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <NowSection />
        <SkillsSection />
        <ProjectsSection />
        <PublicationsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
    </>
  );
};
