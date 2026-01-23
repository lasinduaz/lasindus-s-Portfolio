export interface AboutData {
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  philosophy: {
    title: string;
    description: string;
    icon: string;
  }[];
  approach: {
    title: string;
    description: string;
  }[];
  stats: {
    label: string;
    value: string;
  }[];
}

export const aboutData: AboutData = {
  name: "Lasindu Anjana",
  role: "DevOps Engineer",
  tagline: "Building reliable systems, one pipeline at a time.",
  bio: [
    "I'm a DevOps engineer passionate about automation, infrastructure, and building systems that scale.",
    "With a focus on reliability and performance, I design and implement CI/CD pipelines, containerized environments, and monitoring solutions.",
    "I believe in infrastructure as code, automation over manual processes, and always measuring what matters.",
  ],
  philosophy: [
    {
      title: "Automate Everything",
      description: "If you do it twice, automate it. Reduce human error and increase velocity.",
      icon: "cog",
    },
    {
      title: "Design for Failure",
      description: "Build resilient systems that gracefully handle failures and recover automatically.",
      icon: "shield",
    },
    {
      title: "Scale by Default",
      description: "Architecture decisions today should support tomorrow's growth.",
      icon: "trending-up",
    },
  ],
  approach: [
    {
      title: "Break Problems into Systems",
      description: "Decompose complex challenges into manageable, observable components.",
    },
    {
      title: "Optimize for Reliability",
      description: "Performance matters, but reliability comes first. A fast broken system helps no one.",
    },
    {
      title: "Measure Everything",
      description: "Observability is key. If you can't measure it, you can't improve it.",
    },
  ],
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies", value: "20+" },
    { label: "Uptime Target", value: "99.9%" },
  ],
};
