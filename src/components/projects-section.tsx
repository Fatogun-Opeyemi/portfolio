import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import vueJobPlatformImage from "@/assets/vue-job-platform.png";
import budgetTrackerImage from "@/assets/budget-tracker.png";
import pokemonGameImage from "@/assets/pokemon-game.png";
import rockPaperScissorsImage from "@/assets/rock-paper-scissors.png";
import weatherAppImage from "@/assets/weather-app.png";
import portfolioImage from "@/assets/Screenshot 2025-09-05 154519.png";

export default function ProjectsSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const projects = [
    {
      title: "Personal Portfolio",
      description: "My personal portfolio to showcase my skills and projects, built with React, TypeScript, and Tailwind CSS.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Formspree"],
      liveUrl: "https://fatogun.vercel.app",
      githubUrl: "https://github.com/Fatogun-Opeyemi/portfolio",
      image: portfolioImage,
      category: "Portfolio"
    },
    {
      title: "Vue Job Platform",
      description: "A comprehensive job platform with CRUD, search, and responsive design, powered by a Vue.js frontend and a Node.js/Express/MongoDB backend.",
      technologies: ["Vue.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://vue-job-listing-ten.vercel.app/",
      githubUrl: "https://github.com/Fatogun-Opeyemi/Vue-Job-listing",
      image: vueJobPlatformImage,
      category: "Full-Stack Development"
    },
    {
      title: "Budget Tracker",
      description: "A vanilla JavaScript app for personal finance management, featuring expense tracking, budget allocation, charts, and local storage persistence.",
      technologies: ["JavaScript", "Bootstrap", "Chart.js", "Local Storage"],
      liveUrl: "https://budgetting-app-sigma.vercel.app",
      githubUrl: "https://github.com/Fatogun-Opeyemi/budgetting-app",
      image: budgetTrackerImage,
      category: "Frontend Application"
    },
    {
      title: "Pokemon Game",
      description: "An interactive Pokemon game built with vanilla JavaScript that fetches data from the Pokemon API, displaying random Pokemon and their stats.",
      technologies: ["JavaScript", "Bootstrap", "Pokemon API", "Axios"],
      liveUrl: "https://fun-pokemon-game.vercel.app",
      githubUrl: "https://github.com/Fatogun-Opeyemi/Pokemon-Game",
      image: pokemonGameImage,
      category: "API Integration"
    },
    {
      title: "Rock Paper Scissors",
      description: "A modern take on the classic game with an intelligent AI, score tracking, and smooth animations, built with vanilla JavaScript.",
      technologies: ["JavaScript", "Bootstrap", "Game Logic", "Animations"],
      liveUrl: "https://rock-paper-or-scissors-ii.vercel.app",
      githubUrl: "https://github.com/Fatogun-Opeyemi/Rock-paper-or-scissors-II",
      image: rockPaperScissorsImage,
      category: "Game Development"
    },
    {
      title: "Weather App",
      description: "A real-time weather app providing location-based forecasts and visualizations, built with vanilla JavaScript and external weather APIs.",
      technologies: ["JavaScript", "Bootstrap", "Weather API", "Geolocation"],
      liveUrl: "https://fato-weather-app.vercel.app",
      githubUrl: "https://github.com/Fatogun-Opeyemi/Fato-Weather-App",
      image: weatherAppImage,
      category: "API Integration"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={ref}
          className={`text-center mb-16 ${isIntersecting ? 'animate-fade-in visible' : 'animate-fade-in'}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight" data-testid="projects-title">
            My Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="projects-description">
            A selection of projects that demonstrate my passion for creating meaningful applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative flex flex-col rounded-xl overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/60 transform hover:-translate-y-2 ${isIntersecting ? 'animate-fade-in visible' : 'animate-fade-in'}`}
              style={{ animationDelay: `${index * 150}ms` }}
              data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    data-testid={`project-image-${project.title.toLowerCase().replace(/\s+/g, '-')}`}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-md">{project.category}</Badge>
              </div>

              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground" data-testid={`project-title-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow" data-testid={`project-description-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="text-xs font-medium px-2 py-1 rounded-full border-border bg-secondary/50"
                      data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex gap-4">
                  <Button 
                    variant="default"
                    asChild
                    size="sm"
                    className="flex-1 transform transition-transform duration-200 hover:scale-105"
                    data-testid={`live-demo-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    asChild
                    size="sm"
                    className="flex-1 transform transition-transform duration-200 hover:scale-105"
                    data-testid={`view-code-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
