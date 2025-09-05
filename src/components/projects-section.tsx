import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import vueJobPlatformImage from "@/assets/vue-job-platform.png";
import budgetTrackerImage from "@/assets/budget-tracker.png";
import pokemonGameImage from "@/assets/pokemon-game.png";
import rockPaperScissorsImage from "@/assets/rock-paper-scissors.png";
import weatherAppImage from "@/assets/weather-app.png";

export default function ProjectsSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const projects = [
    {
      title: "Vue Job Platform",
      description: "A comprehensive job listing platform built with Vue.js featuring full CRUD operations, advanced search filters, and responsive design. Integrated with Express.js backend and MongoDB database for seamless data management.",
      technologies: ["Vue.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://vue-job-listing-ten.vercel.app/",
      githubUrl: "https://github.com/Fatogun-Opeyemi/Vue-Job-listing",
      image: vueJobPlatformImage,
      status: "Vue.js",
      statusColor: "text-emerald-500 bg-emerald-500/10"
    },
    {
      title: "Budget Tracker",
      description: "A personal finance management application built with vanilla JavaScript and Bootstrap. Features include expense tracking, budget allocation, visual charts, and local storage persistence for data management.",
      technologies: ["JavaScript", "Bootstrap", "Local Storage", "Chart.js"],
      liveUrl: "https://budgetting-app-sigma.vercel.app",
      githubUrl: "https://github.com/Fatogun-Opeyemi/budgetting-app",
      image: budgetTrackerImage,
      status: "Vanilla JS",
      statusColor: "text-yellow-500 bg-yellow-500/10"
    },
    {
      title: "Pokemon Game",
      description: "An interactive Pokemon game built with vanilla JavaScript that consumes the Pokemon API. Features random Pokemon generation, detailed Pokemon information display, and engaging gameplay mechanics with responsive design.",
      technologies: ["JavaScript", "Bootstrap", "Axios", "Pokemon API"],
      liveUrl: "https://fun-pokemon-game.vercel.app",
      githubUrl: "https://github.com/Fatogun-Opeyemi/Pokemon-Game",
      image: pokemonGameImage,
      status: "API Integration",
      statusColor: "text-blue-500 bg-blue-500/10"
    },
    {
      title: "Rock Paper Scissors",
      description: "A modern take on the classic Rock Paper Scissors game built with vanilla JavaScript. Features intelligent AI opponent, score tracking, game statistics, and smooth animations for an engaging user experience.",
      technologies: ["JavaScript", "Bootstrap", "Game Logic", "Animations"],
      liveUrl: "https://rock-paper-or-scissors-ii.vercel.app",
      githubUrl: "https://github.com/Fatogun-Opeyemi/Rock-paper-or-scissors-II",
      image: rockPaperScissorsImage,
      status: "Game Logic",
      statusColor: "text-purple-500 bg-purple-500/10"
    },
    {
      title: "Weather App",
      description: "A comprehensive weather application that provides real-time weather information using external APIs. Features location-based weather data, 7-day forecasts, and beautiful weather visualizations with responsive design.",
      technologies: ["JavaScript", "Bootstrap", "Weather API", "Geolocation"],
      liveUrl: "https://fato-weather-app.vercel.app",
      githubUrl: "https://github.com/Fatogun-Opeyemi/Fato-Weather-App",
      image: weatherAppImage,
      status: "Weather API",
      statusColor: "text-cyan-500 bg-cyan-500/10"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className={`text-center mb-16 ${isIntersecting ? 'animate-fade-in visible' : 'animate-fade-in'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="projects-title">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="projects-description">
            Showcasing my expertise through real-world applications
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card rounded-xl overflow-hidden ${isIntersecting ? 'animate-fade-in visible' : 'animate-fade-in'}`}
              style={{ animationDelay: `${index * 200}ms` }}
              data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`md:flex ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                  <img 
                    src={project.image}
                    alt={`${project.title} - ${project.description.substring(0, 50)}...`}
                    className="w-full h-64 md:h-full object-cover"
                    data-testid={`project-image-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                    <Badge className={`text-sm font-medium px-3 py-1 rounded-full ${project.statusColor}`}>
                      {project.status}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4" data-testid={`project-title-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`project-description-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => {
                      const techColors = {
                        "Vue.js": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
                        "React": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30", 
                        "JavaScript": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
                        "Node.js": "bg-green-600/20 text-green-400 border-green-600/30",
                        "Express": "bg-gray-600/20 text-gray-300 border-gray-600/30",
                        "MongoDB": "bg-green-500/20 text-green-400 border-green-500/30",
                        "Tailwind CSS": "bg-teal-500/20 text-teal-400 border-teal-500/30",
                        "Bootstrap": "bg-purple-500/20 text-purple-400 border-purple-500/30",
                        "Tailwind": "bg-teal-500/20 text-teal-400 border-teal-500/30"
                      };
                      return (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className={`text-xs px-3 py-1 rounded-full border font-medium ${
                            techColors[tech as keyof typeof techColors] || "bg-gray-500/20 text-gray-300 border-gray-500/30"
                          }`}
                          data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {tech}
                        </Badge>
                      );
                    })}
                  </div>
                  <div className="flex gap-4">
                    <Button 
                      variant="default"
                      asChild
                      className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-4 py-2 rounded-lg"
                      data-testid={`live-demo-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      variant="outline"
                      asChild
                      className="inline-flex items-center bg-card hover:bg-secondary text-card-foreground font-medium px-4 py-2 rounded-lg border border-border"
                      data-testid={`view-code-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
