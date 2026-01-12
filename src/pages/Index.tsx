import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <Layout>
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center hero-gradient">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Welcome to my portfolio
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Hi, I'm{" "}
              <span className="glow-text">Shalini MK</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A passionate developer crafting modern, secure, and user-centric digital experiences
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <div className="flex items-center justify-center gap-4 mb-12">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
              >
                View My Work
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary hover:text-primary transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://github.com/shalz-collab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shalini-mk-b3b67b273"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ScrollReveal delay={0.1}>
              <p className="text-4xl font-bold text-primary mb-2">5+</p>
              <p className="text-muted-foreground text-sm">Projects Completed</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-4xl font-bold text-primary mb-2">8+</p>
              <p className="text-muted-foreground text-sm">Technologies</p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-4xl font-bold text-primary mb-2">∞</p>
              <p className="text-muted-foreground text-sm">Passion for Code</p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="text-4xl font-bold text-primary mb-2">1</p>
              <p className="text-muted-foreground text-sm">Upcoming AI Project</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
