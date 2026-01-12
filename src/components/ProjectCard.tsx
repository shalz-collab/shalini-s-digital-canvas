import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl: string;
  isUpcoming?: boolean;
}

const ProjectCard = ({ title, description, liveUrl, githubUrl, isUpcoming }: ProjectCardProps) => {
  return (
    <div className="project-card group">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        {isUpcoming && (
          <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs font-medium rounded">
            UPCOMING
          </span>
        )}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {description}
      </p>
      <div className="flex items-center gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Github size={16} />
          <span>Code</span>
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
