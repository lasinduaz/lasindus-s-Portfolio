import { Layout } from "@/components/Layout";
import { TerminalAnimation } from "@/components/TerminalAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Folder, Download } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Terminal Animation */}
            <div className="mb-[1.8rem]">
              <TerminalAnimation
                onComplete={() => setAnimationComplete(true)}
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
    </Layout>
  );
};

export default Index;
