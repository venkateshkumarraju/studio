import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactFooter } from "@/components/contact-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <ContactFooter />
    </div>
  );
}
