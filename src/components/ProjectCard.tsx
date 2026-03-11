import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  liveUrl?: string;
  githubUrl: string;
  isUpcoming?: boolean;
  image?: string;
  index?: number;
}

const ProjectCard = ({ title, description, liveUrl, githubUrl, isUpcoming, image, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      className="relative group overflow-hidden rounded border border-primary/20 bg-card/80 backdrop-blur-sm"
      whileHover={{ scale: 1.02, borderColor: "hsl(200 100% 55% / 0.5)" }}
      transition={{ duration: 0.3 }}
      style={{
        boxShadow: "0 0 0 rgba(0, 170, 255, 0)",
      }}
    >
      {/* Holographic scan line */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(180deg, transparent 0%, hsl(200 100% 55% / 0.05) 50%, transparent 100%)",
          backgroundSize: "100% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/40 z-20" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/40 z-20" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/40 z-20" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/40 z-20" />

      {image && (
        <div className="relative overflow-hidden">
          <div className="aspect-video bg-secondary">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          
          {/* Status indicator */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 z-20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[8px] text-primary/70 font-display tracking-widest uppercase">
              {isUpcoming ? "Incoming" : "Active"}
            </span>
          </div>
        </div>
      )}

      <div className="p-4 sm:p-5 relative">
        {/* Mission number */}
        <span className="absolute top-3 right-4 text-[8px] text-primary/30 font-display tracking-wider">
          MSN-{String(index + 1).padStart(3, "0")}
        </span>

        <div className="flex items-start justify-between mb-1.5">
          <h3 className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-primary transition-colors font-display tracking-wide uppercase">
            {title}
          </h3>
          {isUpcoming && (
            <span className="px-1.5 py-0.5 bg-primary/20 text-primary text-[8px] font-bold rounded font-display tracking-wider animate-pulse">
              UPCOMING
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-[10px] sm:text-xs leading-relaxed mb-3 font-mono">
          {description}
        </p>

        {/* Separator line */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-3" />

        <div className="flex items-center gap-3">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors font-display tracking-wider uppercase">
            <Github size={12} />
            <span>Source</span>
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition-colors font-display tracking-wider uppercase">
              <ExternalLink size={12} />
              <span>Deploy</span>
            </a>
          )}
        </div>
      </div>

      {/* Bottom glow on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default ProjectCard;
