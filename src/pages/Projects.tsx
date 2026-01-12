import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Homomorphic Data Spark",
    description:
      "Modern, cloud-secure analytics using homomorphic encryption (CKKS, SIMD batching) for privacy-preserving computations.",
    liveUrl: "https://collegeprojectsshalzprizz.vercel.app/",
    githubUrl: "https://github.com/shalz-collab/homomorphic-data-spark",
  },
  {
    title: "Shalzzzminecraft",
    description: "Creative portfolio website with modern interactive elements.",
    liveUrl: "https://ghibli-night-folio-shalz-collabs-projects.vercel.app/",
    githubUrl: "https://github.com/shalz-collab/shalzzzminecraft",
  },
  {
    title: "Mental Health Tracker & Mood Journal",
    description: "UI Design (Figma) + React.js prototype for mental wellness.",
    githubUrl: "https://github.com/shalz-collab/mental-health-tracker",
  },
  {
    title: "E-Commerce App UI Design",
    description:
      "Full mobile app prototype (cart and product flow) designed in Figma.",
    githubUrl: "https://github.com/shalz-collab/e-commerce-ui",
  },
  {
    title: "PreCare — Agentic AI",
    description:
      "An intelligent health assistant for pregnant women that analyzes medical reports, auto-books doctor appointments, and provides proactive care.",
    githubUrl: "https://github.com/shalz-collab/precare-agentic-ai",
    isUpcoming: true,
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12 animate-fade-up">
            <h1 className="section-title">Projects</h1>
            <p className="text-muted-foreground leading-relaxed">
              A collection of my work spanning web development, UI/UX design, and
              cutting-edge AI applications. Each project represents my commitment to
              building meaningful digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
