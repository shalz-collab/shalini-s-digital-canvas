import Layout from "@/components/Layout";
import SkillBadge from "@/components/SkillBadge";
import ScrollReveal from "@/components/ScrollReveal";
import grootAvatar from "@/assets/groot-avatar.png";

const skills = [
  "HTML",
  "CSS",
  "TypeScript",
  "React",
  "GIT",
  "Firebase",
  "Python",
  "Node.js",
];

const About = () => {
  return (
    <Layout>
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* About Me */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-14 sm:mb-20">
            <ScrollReveal>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 font-display tracking-wider uppercase"
                style={{ textShadow: "0 0 20px hsl(200 100% 55% / 0.15)" }}>
                Know Me
              </h1>
              <div className="space-y-3 text-muted-foreground leading-relaxed text-xs sm:text-sm">
                <p className="font-mono">
                  I'm a passionate creative developer with experience building
                  digital products that users love. I believe in the power of
                  good design and clean code to solve real problems.
                </p>
                <p className="font-mono">
                  When I'm not coding, you'll find me exploring new design
                  trends, contributing to open-source projects, or sharing my
                  knowledge through writing and speaking at conferences.
                </p>
                <p className="font-mono">
                  I'm always excited to work on projects that challenge me to
                  grow and learn something new. Currently exploring the
                  intersection of AI and healthcare with my upcoming project,
                  PreCare.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="right">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img
                      alt="Groot avatar"
                      className="w-full h-full object-contain"
                      loading="lazy"
                      draggable={false}
                      src={grootAvatar}
                    />
                  </div>
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full animate-pulse-glow" />
                  <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-primary/60 rounded-full" />
                  <div className="absolute top-1/2 -right-6 w-2.5 h-2.5 border border-primary rounded-full" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Languages & Technologies */}
          <ScrollReveal delay={0.1}>
            <div className="mb-14 sm:mb-20">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 font-display tracking-wider uppercase"
                style={{ textShadow: "0 0 20px hsl(200 100% 55% / 0.15)" }}>
                Languages & Technologies
              </h2>
              <div className="bg-card border border-border rounded-xl p-5 sm:p-8">
                <h3 className="text-sm sm:text-base font-semibold text-foreground mb-3">
                  Developer
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skills.map((skill, index) => (
                    <ScrollReveal
                      key={skill}
                      delay={index * 0.05}
                      direction="scale"
                    >
                      <SkillBadge skill={skill} />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Experience Timeline */}
          <ScrollReveal delay={0.2}>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-6 font-display tracking-wider uppercase"
              style={{ textShadow: "0 0 20px hsl(200 100% 55% / 0.15)" }}>
              Experience
            </h2>
            <div className="space-y-6">
              <ScrollReveal delay={0.3} direction="left">
                <div className="flex gap-4 sm:gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center text-[10px] sm:text-xs font-bold text-primary-foreground font-display"
                      style={{ boxShadow: "0 0 20px hsl(200 100% 55% / 0.4)" }}>
                      2025
                    </div>
                    <div className="w-px h-full bg-border mt-3" />
                  </div>
                  <div className="pb-6">
                    <h3 className="text-sm sm:text-base font-semibold text-foreground font-mono">
                      Developer
                    </h3>
                    <p className="text-primary text-xs mb-1.5">
                      Building innovative projects
                    </p>
                    <p className="text-muted-foreground text-xs leading-relaxed font-mono">
                      Currently working on PreCare — an Agentic AI project for
                      pregnant women's healthcare. Focused on creating
                      intelligent systems that provide proactive care and
                      automate medical report analysis.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.4} direction="left">
                <div className="flex gap-4 sm:gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center text-[10px] sm:text-xs font-bold text-primary-foreground font-display"
                      style={{ boxShadow: "0 0 20px hsl(200 100% 55% / 0.4)" }}>
                      2024
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground font-mono">
                      Full Stack Developer
                    </h3>
                    <p className="text-primary text-xs mb-1.5">
                      Web Development & UI/UX
                    </p>
                    <p className="text-muted-foreground text-xs leading-relaxed font-mono">
                      Built multiple projects including Homomorphic Data Spark
                      for privacy-preserving analytics, portfolio websites, and
                      mobile app prototypes. Specialized in React, TypeScript,
                      and modern web technologies.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
