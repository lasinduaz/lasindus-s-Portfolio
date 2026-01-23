import { Layout } from "@/components/Layout";
import { TerminalAnimation } from "@/components/TerminalAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Folder, Download } from "lucide-react";
import { aboutData } from "@/data/about";
import { useState } from "react";

const terminalLines = [
  { type: "command" as const, text: "whoami" },
  { type: "output" as const, text: "DevOps Engineer | System Architect | Automation Enthusiast", delay: 200 },
  { type: "command" as const, text: "cat intro.txt", delay: 400 },
  { type: "output" as const, text: "", delay: 100 },
  { type: "prompt" as const, text: "Building reliable systems, one pipeline at a time.", delay: 100 },
  { type: "output" as const, text: "", delay: 100 },
  { type: "output" as const, text: "I automate everything, design for failure, and scale by default.", delay: 100 },
  { type: "output" as const, text: "", delay: 100 },
  { type: "command" as const, text: "ls ./portfolio", delay: 600 },
  { type: "output" as const, text: "projects/  skills/  about.md  contact.md  resume.pdf", delay: 200 },
  { type: "command" as const, text: "_", delay: 400 },
];

const Index = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Terminal Animation */}
            <div className="mb-12">
              <TerminalAnimation
                lines={terminalLines}
                onComplete={() => setAnimationComplete(true)}
                typingSpeed={40}
              />
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 justify-center transition-opacity duration-500 ${
                animationComplete ? "opacity-100" : "opacity-0"
              }`}
            >
              <Button asChild size="lg" className="gap-2 glow-box">
                <Link to="/projects">
                  <Folder className="w-4 h-4" />
                  <span>$ explore projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4" />
                  <span>$ cat resume.pdf</span>
                </a>
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-16 border-t border-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">
              <span className="text-muted-foreground">// </span>
              Quick Overview
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I specialize in building automated, reliable, and scalable infrastructure.
              Every system I design follows DevOps best practices: infrastructure as code,
              continuous integration, and observability-first architecture.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {aboutData.philosophy.map((item, index) => (
                <div
                  key={item.title}
                  className="terminal-window card-hover p-6 text-left opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-primary font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Button asChild variant="ghost" className="gap-2 text-secondary hover:text-secondary">
                <Link to="/about">
                  <span>$ more about me</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
