import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  icon?: LucideIcon;
  className?: string;
}

export const StatCard = ({ label, value, icon: Icon, className }: StatCardProps) => {
  return (
    <div
      className={cn(
        "terminal-window card-hover p-4 text-center",
        className
      )}
    >
      {Icon && (
        <Icon className="w-6 h-6 text-secondary mx-auto mb-2" />
      )}
      <div className="text-2xl font-bold text-primary glow-text">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
};
