import { Helmet } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { PublicationsSection } from "../components/PublicationsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { MusicPlayer } from "@/components/MusicPlayer";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Aman Kumar Bhamboo - Data Analyst & Researcher | Portfolio</title>
        <meta name="description" content="Data Analyst and Researcher specializing in Python, SQL, Tableau, and data visualization. Explore projects in brain MRI segmentation, ETL pipelines, and business intelligence by Aman Kumar Bhamboo." />
        <meta name="keywords" content="Aman Bhamboo, Aman Kumar Bhamboo, data analyst, Python, SQL, Tableau, portfolio, data visualization, brain MRI, ETL, Jhunjhunu" />
        <meta property="og:title" content="Aman Kumar Bhamboo - Data Analyst & Researcher | Portfolio" />
        <meta property="og:description" content="Data Analyst and Researcher specializing in Python, SQL, Tableau, and data visualization. Brain MRI segmentation, ETL pipelines, and BI projects." />
        <meta property="og:image" content="https://amanbhamboo.vercel.app/og-image.png" />
        <meta property="og:url" content="https://amanbhamboo.vercel.app/" />
        <meta name="twitter:title" content="Aman Kumar Bhamboo - Data Analyst & Researcher | Portfolio" />
        <meta name="twitter:description" content="Data Analyst and Researcher specializing in Python, SQL, Tableau, and data visualization. Brain MRI segmentation, ETL pipelines, and BI projects." />
        <meta name="twitter:image" content="https://amanbhamboo.vercel.app/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-background text-foreground overflow-x-hidden scroll-smooth">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <StarBackground />
      </div>

      {/* Navbar - Fixed/Absolute handling might be needed depending on z-index */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="relative z-10 pt-16">
        <section className="min-h-screen snap-start flex flex-col justify-center">
          <HeroSection />
        </section>
        <section className="min-h-screen snap-start flex flex-col justify-center">
          <AboutSection />
        </section>
        <section className="min-h-screen snap-start flex flex-col justify-center">
          <SkillsSection />
        </section>
        <section className="min-h-screen snap-start flex flex-col justify-center">
          <ProjectsSection />
        </section>
        <section className="min-h-screen snap-start flex flex-col justify-center">
          <PublicationsSection />
        </section>
        <section className="min-h-screen snap-start flex flex-col justify-center">
          <ContactSection />
        </section>
        {/* Footer might need to be inside the last section or separate snap point */}
        <section className="snap-start">
          <Footer />
        </section>
      </main>

      <MusicPlayer />
    </div>
    </>
  );
};
