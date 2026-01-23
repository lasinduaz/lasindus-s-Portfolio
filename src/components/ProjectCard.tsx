import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "terminal-window card-hover p-6 flex flex-col h-full",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <span className="text-xs text-secondary mb-1 block">{project.category}</span>
          <h3 className="text-lg font-semibold text-primary glow-text">{project.title}</h3>
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-secondary transition-colors"
              aria-label="View live project"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Problem/Solution/Outcome */}
      <div className="space-y-4 flex-1">
        <div>
          <h4 className="text-xs font-semibold text-destructive mb-1">// PROBLEM</h4>
          <p className="text-sm text-muted-foreground">{project.problem}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-secondary mb-1">// SOLUTION</h4>
          <p className="text-sm text-muted-foreground">{project.solution}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-primary mb-1">// OUTCOME</h4>
          <p className="text-sm text-muted-foreground">{project.outcome}</p>
        </div>

        {/* Key Learnings */}
        {project.keyLearnings && (
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground mb-2">// KEY LEARNINGS</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {project.keyLearnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-primary/20">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
