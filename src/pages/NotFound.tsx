import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Terminal } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[calc(100vh-12rem)] flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="terminal-window p-8 max-w-lg mx-auto">
            <div className="mb-6">
              <Terminal className="w-16 h-16 text-destructive mx-auto mb-4" />
              <h1 className="text-6xl font-bold text-primary glow-text mb-2">404</h1>
              <h2 className="text-xl text-muted-foreground">Page Not Found</h2>
            </div>

            <div className="font-mono text-sm text-left mb-6 p-4 bg-background/50 rounded">
              <p className="text-muted-foreground">
                <span className="text-secondary">$</span> cd {location.pathname}
              </p>
              <p className="text-destructive">
                bash: cd: {location.pathname}: No such file or directory
              </p>
              <p className="text-muted-foreground mt-2">
                <span className="text-secondary">$</span> <span className="cursor-blink">_</span>
              </p>
            </div>

            <Button asChild className="gap-2">
              <Link to="/">
                <Home className="w-4 h-4" />
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
