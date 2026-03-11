import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, ExternalLink, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import TechStack from "@/components/TechStack";
import ProjectCard from "@/components/ProjectCard";
import TypewriterText from "@/components/TypewriterText";
import OpeningCrawl from "@/components/OpeningCrawl";
import projectHomomorphic from "@/assets/project-homomorphic.jpg";
import projectMinecraft from "@/assets/project-minecraft.jpg";
import projectMentalHealth from "@/assets/project-mental-health.jpg";
import projectPrecare from "@/assets/project-precare.jpg";
import projectMcios from "@/assets/project-mcios.jpg";
import projectPayroll from "@/assets/project-payroll.jpg";

const projects = [
  {
    title: "Homomorphic Data Spark",
    description: "Cloud-secure analytics using homomorphic encryption.",
    liveUrl: "https://collegeprojectsshalzprizz.vercel.app/",
    githubUrl: "https://github.com/shalz-collab/homomorphic-data-spark",
    image: projectHomomorphic,
  },
  {
    title: "Aura Payroll",
    description: "Modern payroll management with salary tracking.",
    liveUrl: "https://aurapayroll.vercel.app/",
    githubUrl: "https://github.com/shalz-collab",
    image: projectPayroll,
  },
  {
    title: "MCIOS Portfolio",
    description: "iOS-inspired portfolio with glassmorphism effects.",
    liveUrl: "https://shalinii-s-ios.vercel.app/",
    githubUrl: "https://github.com/shalz-collab",
    image: projectMcios,
  },
  {
    title: "Shalzzzminecraft",
    description: "Minecraft-inspired portfolio with interactive elements.",
    liveUrl: "https://ghibli-night-folio-shalz-collabs-projects.vercel.app/",
    githubUrl: "https://github.com/shalz-collab/shalzzzminecraft",
    image: projectMinecraft,
  },
  {
    title: "Mental Health Tracker",
    description: "React.js prototype for mental wellness tracking.",
    githubUrl: "https://github.com/shalz-collab/mental-health-tracker",
    image: projectMentalHealth,
  },
  {
    title: "PreCare — Agentic AI",
    description: "AI health assistant for pregnant women.",
    githubUrl: "https://github.com/shalz-collab/precare-agentic-ai",
    image: projectPrecare,
    isUpcoming: true,
  },
];

const typewriterTexts = [
  "Full Stack Developer",
  "AI Enthusiast",
  "Problem Solver",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with Opening Crawl */}
      <section
        id="home"
        className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center hero-gradient relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <OpeningCrawl />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <div className="text-sm sm:text-base md:text-lg text-primary font-mono mb-3 h-6 sm:h-7">
              <TypewriterText texts={typewriterTexts} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.5 }}
          >
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-lg mx-auto mb-5 font-mono">
              "Building the full picture — frontend, backend, and beyond."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 flex-wrap">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold rounded tracking-wider uppercase hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] font-display"
              >
                Know Me
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-border text-foreground text-[10px] sm:text-xs font-bold rounded tracking-wider uppercase hover:border-primary hover:text-primary transition-all font-display"
              >
                Contact Me
              </Link>
              <Link
                to="/contact#nebula-rush"
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-primary/50 text-primary text-[10px] sm:text-xs font-bold rounded tracking-wider uppercase hover:bg-primary/10 transition-all font-display"
              >
                <Rocket size={14} />
                Nebula Rush
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3">
              <a href="https://github.com/shalz-collab" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/shalini-mk-b3b67b273" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 sm:py-10 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {[
              { val: "6", label: "Missions Complete" },
              { val: "8", label: "Weapons Mastered" },
              { val: "∞", label: "Force Level" },
              { val: "1", label: "Incoming Mission" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <p className="text-2xl sm:text-3xl font-bold text-primary mb-0.5 font-display">{stat.val}</p>
                <p className="text-muted-foreground text-[10px] uppercase tracking-wider font-display">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Arsenal Section */}
      <section id="languages" className="py-8 sm:py-10 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1 font-display tracking-wider uppercase">
                Arsenal & Tools
              </h2>
              <p className="text-muted-foreground text-[10px] max-w-md mx-auto uppercase tracking-wider font-display">
                Weapons in my galactic toolkit
              </p>
            </div>
          </ScrollReveal>
          <TechStack />
        </div>
      </section>

      {/* Featured Missions */}
      <section id="projects" className="py-10 sm:py-14 border-t border-border/50 relative">
        {/* Section decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[8px] text-primary/60 font-display tracking-[0.3em] uppercase">
                    Mission Log
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground font-display tracking-wider uppercase">
                  Featured Missions
                </h2>
              </div>
              <Link to="/projects" className="hidden md:inline-flex items-center gap-1.5 text-primary text-[10px] hover:underline font-display tracking-wider uppercase border border-primary/20 px-3 py-1.5 rounded hover:bg-primary/5 transition-all">
                View All
                <ExternalLink size={12} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {projects.slice(0, 6).map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.08}>
                <ProjectCard {...project} index={index} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-6 text-center md:hidden">
              <Link to="/projects" className="inline-flex items-center gap-1.5 text-primary text-[10px] font-display tracking-wider uppercase border border-primary/20 px-3 py-1.5 rounded hover:bg-primary/5 transition-all">
                View All Missions
                <ExternalLink size={12} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-14 border-t border-border/50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <span className="text-[8px] text-primary/50 font-display tracking-[0.3em] uppercase block mb-3">
              Transmission Open
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 font-display tracking-wider uppercase">
              Join the Alliance
            </h2>
            <p className="text-muted-foreground text-xs max-w-md mx-auto mb-5 font-mono">
              Have a project in mind? Let's build something legendary together.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold rounded tracking-wider uppercase hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] font-display"
              >
                Get in Touch
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact#nebula-rush"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-primary/50 text-primary text-[10px] sm:text-xs font-bold rounded tracking-wider uppercase hover:bg-primary/10 transition-all font-display"
              >
                <Rocket size={14} />
                Play Nebula Rush
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
