export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "DevOps",
    icon: "server",
    skills: [
      "Linux Administration",
      "Docker & Containerization",
      "CI/CD Fundamentals",
      "Git & GitHub Workflows",
      "YAML Configuration",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Shell Scripting",
    ],
  },
  {
    name: "Programming",
    icon: "code",
    skills: [
      "Python",
      "Rust",
      "Bash",
      "JavaScript",
      "SQL",
    ],
  },
  {
    name: "Web",
    icon: "globe",
    skills: [
      "HTML5",
      "CSS3",
      "React",
      "Tailwind CSS",
      "REST APIs",
    ],
  },
  {
    name: "Tools",
    icon: "wrench",
    skills: [
      "Docker",
      "GitHub Actions",
      "Git",
      "SQLite",
      "PostgreSQL",
      "Nginx",
    ],
  },
];
