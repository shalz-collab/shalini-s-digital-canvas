import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";
import projectHomomorphic from "@/assets/project-homomorphic.jpg";
import projectMinecraft from "@/assets/project-minecraft.jpg";
import projectMentalHealth from "@/assets/project-mental-health.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectPrecare from "@/assets/project-precare.jpg";
import projectMcios from "@/assets/project-mcios.jpg";
import projectPayroll from "@/assets/project-payroll.jpg";

const projects = [
  { title: "Homomorphic Data Spark", description: "Cloud-secure analytics using homomorphic encryption for privacy-preserving computations.", liveUrl: "https://collegeprojectsshalzprizz.vercel.app/", githubUrl: "https://github.com/shalz-collab/homomorphic-data-spark", image: projectHomomorphic },
  { title: "Aura Payroll", description: "Modern payroll management system with employee salary tracking and payment processing.", liveUrl: "https://aurapayroll.vercel.app/", githubUrl: "https://github.com/shalz-collab", image: projectPayroll },
  { title: "MCIOS Portfolio", description: "macOS/iOS inspired portfolio with glassmorphism effects and interactive dock navigation.", liveUrl: "https://shalinii-s-ios.vercel.app/", githubUrl: "https://github.com/shalz-collab/mcios-portfolio", image: projectMcios },
  { title: "Shalzzzminecraft", description: "Creative portfolio with modern interactive elements and Minecraft-inspired design.", liveUrl: "https://ghibli-night-folio-shalz-collabs-projects.vercel.app/", githubUrl: "https://github.com/shalz-collab/shalzzzminecraft", image: projectMinecraft },
  { title: "Mental Health Tracker", description: "UI Design (Figma) + React.js prototype for mental wellness tracking.", githubUrl: "https://github.com/shalz-collab/mental-health-tracker", image: projectMentalHealth },
  { title: "E-Commerce App UI", description: "Mobile app prototype with cart and product flow designed in Figma.", githubUrl: "https://github.com/shalz-collab/e-commerce-ui", image: projectEcommerce },
  { title: "PreCare — Agentic AI", description: "Intelligent health assistant for pregnant women with medical report analysis.", githubUrl: "https://github.com/shalz-collab/precare-agentic-ai", isUpcoming: true, image: projectPrecare },
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="max-w-2xl mb-8 sm:mb-12">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 font-display tracking-wider uppercase"
                style={{ textShadow: "0 0 20px hsl(200 100% 55% / 0.15)" }}>
                MISSIONS
              </h1>
              <p className="text-muted-foreground leading-relaxed font-mono text-xs sm:text-sm">
                A collection of my work spanning web development, UI/UX design, and
                emerging technologies like homomorphic encryption and agentic AI.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.08}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
