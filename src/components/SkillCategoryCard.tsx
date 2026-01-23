import { cn } from "@/lib/utils";
import { Server, Code, Globe, Wrench, LucideIcon } from "lucide-react";
import type { SkillCategory } from "@/data/skills";

const iconMap: Record<string, LucideIcon> = {
  server: Server,
  code: Code,
  globe: Globe,
  wrench: Wrench,
};

interface SkillCategoryCardProps {
  category: SkillCategory;
  className?: string;
  delay?: number;
}

export const SkillCategoryCard = ({ category, className, delay = 0 }: SkillCategoryCardProps) => {
  const IconComponent = iconMap[category.icon] || Code;

  return (
    <div
      className={cn(
        "terminal-window card-hover p-6 opacity-0 animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-primary/20">
        <div className="p-2 bg-primary/10 rounded glow-box">
          <IconComponent className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-primary">{category.name}</h3>
      </div>

      {/* Skills List */}
      <div className="space-y-2">
        {category.skills.map((skill, index) => (
          <div
            key={skill}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-primary text-xs">$</span>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
