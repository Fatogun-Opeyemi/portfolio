import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiWebpack,
  SiVite,
  SiJest,
  SiFigma,
} from "react-icons/si";

export default function SkillsSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const skills = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Vue", icon: SiVuedotjs },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Firebase", icon: SiFirebase },
    { name: "Git & GitHub", icon: SiGit },
    { name: "Webpack", icon: SiWebpack },
    { name: "Vite", icon: SiVite },
    { name: "Jest", icon: SiJest },
    { name: "Figma", icon: SiFigma },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 ${
            isIntersecting ? "animate-fade-in visible" : "animate-fade-in"
          }`}
        >
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight"
            data-testid="skills-title"
          >
            My Technical Arsenal
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="skills-description"
          >
            A curated collection of technologies I use to build robust and
            beautiful web applications.
          </p>
        </div>

        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 ${
            isIntersecting ? "animate-fade-in visible" : "animate-fade-in"
          }`}>
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative flex flex-col items-center justify-center p-4 rounded-lg border border-border bg-card hover:border-primary/80 transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
              data-testid={`skill-${skill.name.toLowerCase().replace(" ", "-")}`}
            >
              <skill.icon className="text-4xl mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
              <h4 className="font-medium text-center text-sm leading-tight">
                {skill.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
