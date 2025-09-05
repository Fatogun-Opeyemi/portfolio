import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function SkillsSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const skills = [
    {
      name: "JavaScript",
      level: "ES6+",
      icon: "JS",
      bgColor: "bg-yellow-500",
      textColor: "text-black"
    },
    {
      name: "TypeScript", 
      level: "Type Safety",
      icon: "TS",
      bgColor: "bg-blue-600",
      textColor: "text-white"
    },
    {
      name: "Vue.js",
      level: "3.x", 
      icon: "V",
      bgColor: "bg-emerald-500",
      textColor: "text-white"
    },
    {
      name: "React",
      level: "18.x",
      icon: "⚛",
      bgColor: "bg-cyan-400", 
      textColor: "text-white"
    },
    {
      name: "Node.js",
      level: "Runtime",
      icon: "N",
      bgColor: "bg-green-600",
      textColor: "text-white"
    },
    {
      name: "Express",
      level: "Framework", 
      icon: "EX",
      bgColor: "bg-gray-700",
      textColor: "text-white"
    },
    {
      name: "MongoDB",
      level: "NoSQL",
      icon: "🍃",
      bgColor: "bg-green-500",
      textColor: "text-white"
    },
    {
      name: "Tailwind",
      level: "CSS Framework",
      icon: "💨",
      bgColor: "bg-teal-500", 
      textColor: "text-white"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className={`text-center mb-16 ${isIntersecting ? 'animate-fade-in visible' : 'animate-fade-in'}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="skills-title">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="skills-description">
            A comprehensive toolkit for modern web development
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-card p-6 rounded-xl text-center ${isIntersecting ? 'animate-fade-in visible' : 'animate-fade-in'}`}
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`skill-${skill.name.toLowerCase().replace('.', '')}`}
            >
              <div className={`w-16 h-16 ${skill.bgColor} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
                <span className={`${skill.textColor} font-bold text-xl`}>
                  {skill.icon}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
