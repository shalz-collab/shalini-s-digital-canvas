import ScrollReveal from "./ScrollReveal";

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

const technologies: TechItem[] = [
  { name: "Python", icon: "🐍", color: "from-yellow-500/20 to-blue-500/20" },
  { name: "Java", icon: "☕", color: "from-orange-500/20 to-red-500/20" },
  { name: "React", icon: "⚛️", color: "from-cyan-500/20 to-blue-500/20" },
  { name: "MongoDB", icon: "🍃", color: "from-green-500/20 to-emerald-500/20" },
  { name: "Postman", icon: "📮", color: "from-orange-500/20 to-yellow-500/20" },
  { name: "TypeScript", icon: "📘", color: "from-blue-500/20 to-indigo-500/20" },
  { name: "Node.js", icon: "🟢", color: "from-green-600/20 to-lime-500/20" },
  { name: "Firebase", icon: "🔥", color: "from-yellow-500/20 to-orange-500/20" },
];

const TechStack = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {technologies.map((tech, index) => (
        <ScrollReveal key={tech.name} delay={index * 0.05} direction="scale">
          <div
            className={`group relative p-4 rounded-xl bg-gradient-to-br ${tech.color} border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer`}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </span>
              <span className="text-sm font-medium text-foreground">{tech.name}</span>
            </div>
            <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default TechStack;
