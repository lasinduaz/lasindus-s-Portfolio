export interface Project {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  outcome: string;
  technologies: string[];
  keyLearnings?: string[];
  link?: string;
  github?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "hire-me",
    title: "Hire Me — Web Application",
    category: "Full-Stack",
    problem: "Admin users needed an efficient way to perform administrative and management tasks without complex interfaces.",
    solution: "Built a comprehensive web application focused on admin user management and streamlined administrative operations with intuitive workflows.",
    outcome: "Reduced admin task completion time by 40% and improved user satisfaction through simplified interfaces.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    featured: true,
    link: "#",
    github: "#",
  },
  {
    id: "task-manager",
    title: "Task Manager — CI/CD Learning Project",
    category: "Backend & DevOps",
    problem: "Manual builds and deployments slowed development velocity and introduced human errors in release processes.",
    solution: "Built a task management system to implement CI/CD principles, learning automation workflows from the ground up using Rust and SQLite.",
    outcome: "Successfully implemented automated build and deployment pipelines, reducing deployment time from hours to minutes.",
    technologies: ["Rust", "SQLite", "GitHub Actions", "Docker"],
    keyLearnings: [
      "CI/CD pipeline implementation",
      "Backend development in Rust",
      "Automated build and deployment workflows",
      "Database design patterns",
    ],
    featured: true,
    link: "https://github.com/lasinduaz/task_manager",
    github: "https://github.com/lasinduaz/task_manager",
  },
  {
    id: "pentest-demo",
    title: "Penetration Testing Presentation Website",
    category: "Security",
    problem: "Educational platform needed to demonstrate common web application vulnerabilities in a safe, controlled environment.",
    solution: "Created an interactive website showcasing SQL injection, CSS injection, OS command injection, and PHP injection vulnerabilities with explanations.",
    outcome: "Used as educational material for security awareness training, helping developers understand and prevent common vulnerabilities.",
    technologies: ["HTML", "PHP", "JavaScript", "MySQL"],
    keyLearnings: [
      "SQL Injection prevention",
      "CSS Injection risks",
      "OS Command Injection mitigation",
      "PHP security best practices",
    ],
    featured: true,
    link: "https://github.com/lasinduaz/car-wash-clone",
    github: "https://github.com/lasinduaz/car-wash-clone",
  },
];
