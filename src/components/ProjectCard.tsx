import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl: string;
  isUpcoming?: boolean;
  image?: string;
}

const ProjectCard = ({ title, description, liveUrl, githubUrl, isUpcoming, image }: ProjectCardProps) => {
  return (
    <div className="project-card group overflow-hidden">
      {image && (
        <div className="relative -mx-6 -mt-6 mb-3 overflow-hidden">
          <div className="aspect-video bg-secondary">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>
      )}

      <div className="flex items-start justify-between mb-2">
        <h3 className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors font-mono">
          {title}
        </h3>
        {isUpcoming && (
          <span className="px-1.5 py-0.5 bg-primary/20 text-primary text-[10px] font-medium rounded animate-pulse">
            UPCOMING
          </span>
        )}
      </div>
      <p className="text-muted-foreground text-xs leading-relaxed mb-4 font-mono">
        {description}
      </p>
      <div className="flex items-center gap-3">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
          <Github size={14} />
          <span>Code</span>
        </a>
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
            <ExternalLink size={14} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
