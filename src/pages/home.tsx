import { Suspense, lazy } from "react";

const Navigation = lazy(() => import("@/components/navigation"));
const HeroSection = lazy(() => import("@/components/hero-section"));
const AboutSection = lazy(() => import("@/components/about-section"));
const SkillsSection = lazy(() => import("@/components/skills-section"));
const ProjectsSection = lazy(() => import("@/components/projects-section"));
const ContactSection = lazy(() => import("@/components/contact-section"));

function SectionLoading() {
  return (
    <div className="flex items-center justify-center h-96">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div className="h-20 border-b border-border" />}>
        <Navigation />
      </Suspense>
      <main>
        <Suspense fallback={<SectionLoading />}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <SkillsSection />
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <ContactSection />
        </Suspense>
      </main>
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Opeyemi Fatogun. Built with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
}
