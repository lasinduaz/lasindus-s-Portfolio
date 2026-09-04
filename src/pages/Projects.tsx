import { Layout } from "@/components/Layout";
import { projectsData } from "@/data/projects";
import { ChevronRight } from "lucide-react";

const Projects = () => {
  return (
    <Layout>
      <section className="projects-shell">
        <div className="projects-command">
          <span className="projects-user">lasindu@lasinduspc</span>:<span className="projects-path">~/projects</span>$ <span className="projects-command-text">ls -la</span>
        </div>

        <h1 className="projects-title"><span>//</span>Projects</h1>

        <div className="projects-terminal-stack">
          {projectsData.map((project, index) => (
            <details key={project.id} className="project-terminal" open={index === 0}>
              <summary className="project-titlebar">
                <span className="project-dot project-dot-red" />
                <span className="project-dot project-dot-yellow" />
                <span className="project-dot project-dot-green" />
                <span className="project-terminal-title">lasindu@kali: ~/{project.id}</span>
                <span className="project-category">{project.category}</span>
                <ChevronRight className="project-chevron" aria-hidden="true" />
              </summary>

              <div className="project-terminal-body">
                <h2 className="project-pane-title">{project.title}</h2>

                <div className="project-field-label project-problem">PROBLEM</div>
                <p className="project-field-text">{project.problem}</p>

                <div className="project-field-label project-solution">SOLUTION</div>
                <p className="project-field-text">{project.solution}</p>

                <div className="project-field-label project-outcome">OUTCOME</div>
                <p className="project-field-text">{project.outcome}</p>

                {project.keyLearnings && (
                  <>
                    <div className="project-field-label project-learnings">KEY LEARNINGS</div>
                    <ul className="project-learnings-list">
                      {project.keyLearnings.map((learning) => <li key={learning}>{learning}</li>)}
                    </ul>
                  </>
                )}

                <div className="project-tag-row">
                  {project.technologies.map((technology) => <span className="project-tag" key={technology}>{technology}</span>)}
                </div>
              </div>
            </details>
          ))}
        </div>

        <div className="projects-footer">
          $ More projects available on <a href="https://github.com/lasinduaz" target="_blank" rel="noopener noreferrer">GitHub</a><span className="project-cursor" />
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
