import TypewriterEffect from "@/components/typewriter-effect";
import { Download, Code, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/download_1757086324280.jpg";
import pdf from '@/assets/fatogun-opeyemi-resume.pdf'

export default function HeroSection() {
  const phrases = [
    "Full Stack Developer",
    "Vue.js Specialist", 
    "React Developer",
    "MERN Stack Developer",
    "Node.js Engineer",
    "Frontend Enthusiast"
  ];

  const handleSectionNavigation = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'fatogun-opeyemi-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-24 sm:pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="text-center">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in-down animation-delay-200">
          <img 
            src={profileImage}
            alt="Opeyemi Fatogun - Full Stack Developer" 
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto shadow-2xl border-4 border-primary/20 object-cover"
            data-testid="profile-image"
            style={{ objectPosition: 'center center' }}
          />
        </div>
        
        <h1 
          className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up"
          data-testid="hero-title"
        >
          Hi, I'm <span className="text-primary">Opeyemi Fatogun</span>
        </h1>
        
        <div 
          className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 h-8 animate-fade-in-up animation-delay-200"
        >
          <TypewriterEffect phrases={phrases} />
        </div>
        
        <p 
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up animation-delay-400"
          data-testid="hero-description"
        >
          Passionate mid-level engineer specializing in modern web technologies. I craft scalable applications using Vue, React, Node.js, and MongoDB, focusing on clean code and exceptional user experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
          <Button
            onClick={() => handleSectionNavigation("#projects")}
            size="lg"
            data-testid="button-view-work"
          >
            <Code className="w-4 h-4 mr-2" />
            View My Work
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => handleSectionNavigation("#contact")}
            data-testid="button-connect"
          >
            <Mail className="w-4 h-4 mr-2" />
            Let's Connect
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={handleResumeDownload}
            data-testid="button-download-resume"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
