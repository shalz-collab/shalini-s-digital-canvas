import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";

import projectHomomorphic from "@/assets/project-homomorphic.jpg";
import projectMinecraft from "@/assets/project-minecraft.jpg";
import projectMentalHealth from "@/assets/project-mental-health.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectPrecare from "@/assets/project-precare.jpg";
import projectMcios from "@/assets/project-mcios.jpg";

const projects = [
  {
    title: "Homomorphic Data Spark",
    description:
      "Modern, cloud-secure analytics using homomorphic encryption (CKKS, SIMD batching) for privacy-preserving computations.",
    liveUrl: "https://collegeprojectsshalzprizz.vercel.app/",
    githubUrl: "https://github.com/shalz-collab/homomorphic-data-spark",
    image: projectHomomorphic,
  },
  {
    title: "MCIOS Portfolio",
    description:
      "A creative macOS/iOS inspired portfolio website with glassmorphism effects and interactive dock navigation.",
    liveUrl: "https://shalinii-s-ios.vercel.app/",
    githubUrl: "https://github.com/shalz-collab/mcios-portfolio",
    image: projectMcios,
  },
  {
    title: "Shalzzzminecraft",
    description:
      "Creative portfolio website with modern interactive elements and unique Minecraft-inspired design.",
    liveUrl: "https://ghibli-night-folio-shalz-collabs-projects.vercel.app/",
    githubUrl: "https://github.com/shalz-collab/shalzzzminecraft",
    image: projectMinecraft,
  },
  {
    title: "Mental Health Tracker & Mood Journal",
    description:
      "UI Design (Figma) + React.js prototype for mental wellness tracking and mood journaling.",
    githubUrl: "https://github.com/shalz-collab/mental-health-tracker",
    image: projectMentalHealth,
  },
  {
    title: "E-Commerce App UI Design",
    description:
      "Full mobile app prototype (cart and product flow) designed in Figma with modern aesthetics.",
    githubUrl: "https://github.com/shalz-collab/e-commerce-ui",
    image: projectEcommerce,
  },
  {
    title: "PreCare — Agentic AI",
    description:
      "An intelligent health assistant for pregnant women that analyzes medical reports, auto-books doctor appointments, and provides proactive care.",
    githubUrl: "https://github.com/shalz-collab/precare-agentic-ai",
    isUpcoming: true,
    image: projectPrecare,
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mb-12">
              <h1 className="section-title">Projects</h1>
              <p className="text-muted-foreground leading-relaxed">
                A collection of my work spanning web development, UI/UX design, and
                emerging technologies like homomorphic encryption and agentic AI.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.1}>
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
