import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
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
          <ContactSection />
        </section>
        {/* Footer might need to be inside the last section or separate snap point */}
        <section className="snap-start">
          <Footer />
        </section>
      </main>
    </div>
  );
};
