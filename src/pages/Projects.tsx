import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";

const Projects = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="terminal-window p-6 mb-8">
              <div className="font-mono text-sm">
                <span className="text-secondary">lasindu@lasinduspc</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-primary">~/projects</span>
                <span className="text-muted-foreground">$ </span>
                <span className="text-foreground">ls -la</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-primary glow-text mb-4">
              <span className="text-muted-foreground">// </span>
              Projects
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              A collection of projects that demonstrate real-world problem-solving,
              DevOps principles, and engineering best practices. Each project follows
              the pattern: Problem → Solution → Outcome.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary">$</span> More projects available on{" "}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
