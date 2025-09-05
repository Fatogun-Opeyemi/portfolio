import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={ref}
          className={`relative border border-[#DD785F] rounded-lg p-8 ${isIntersecting ? 'animate-fade-in visible' : 'animate-fade-in'}`}
        >
          <div className="absolute -top-4 left-4 bg-background px-4">
            <h2 className="text-2xl font-bold text-[#DD785F]" data-testid="about-title">
              About Yemi
            </h2>
          </div>
          <div className="mt-8">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Building Tomorrow's Web Today</h3>
          </div>
          <div className="space-y-6 text-muted-foreground">
            <p className="text-base sm:text-lg leading-relaxed" data-testid="about-paragraph-1">
              Building Tomorrow's Web Today - I'm a passionate full-stack developer with a keen eye for creating seamless digital experiences. With expertise in modern JavaScript ecosystems, I specialize in building scalable web applications that solve real-world problems.
            </p>
            <p className="text-base sm:text-lg leading-relaxed" data-testid="about-paragraph-2">
              My journey in web development has led me to master both frontend and backend technologies, from crafting intuitive user interfaces with Vue.js and React to building robust APIs with Node.js and Express. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
            </p>
            <p className="text-base sm:text-lg leading-relaxed" data-testid="about-paragraph-3">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I'm always eager to take on new challenges and collaborate on exciting projects that push the boundaries of what's possible on the web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
