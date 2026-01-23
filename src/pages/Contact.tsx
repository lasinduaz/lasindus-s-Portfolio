import { Layout } from "@/components/Layout";
import { contactData } from "@/data/contact";
import { Mail, Github, Linkedin, FileText, Download, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const iconMap = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
};

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy");
    }
  };

  const emailLink = contactData.links.find((link) => link.name === "Email");

  return (
    <Layout>
      <section className="py-16 min-h-[calc(100vh-12rem)] flex items-center">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="terminal-window p-6 mb-8">
              <div className="font-mono text-sm">
                <span className="text-secondary">lasindu@lasinduspc</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-primary">~</span>
                <span className="text-muted-foreground">$ </span>
                <span className="text-foreground">cat contact.md</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-primary glow-text mb-4">
              <span className="text-muted-foreground">// </span>
              {contactData.headline}
            </h1>
            <p className="text-muted-foreground max-w-xl">
              {contactData.subheadline}
            </p>
          </div>

          {/* Contact Links */}
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {contactData.links.map((link, index) => {
                const IconComponent = iconMap[link.icon as keyof typeof iconMap] || Mail;
                return (
                  <div
                    key={link.name}
                    className="terminal-window card-hover p-6 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded glow-box">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-primary font-semibold">{link.name}</h3>
                          <p className="text-sm text-muted-foreground">{link.displayValue}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {link.copyable && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopy(link.displayValue)}
                            className="gap-2"
                          >
                            {copied ? (
                              <Check className="w-4 h-4 text-primary" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                            {copied ? "Copied" : "Copy"}
                          </Button>
                        )}
                        <Button asChild variant="outline" size="sm">
                          <a
                            href={link.url}
                            target={link.name !== "Email" ? "_blank" : undefined}
                            rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                          >
                            Open
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Resume Download */}
              <div
                className="terminal-window card-hover p-6 opacity-0 animate-fade-in"
                style={{ animationDelay: `${contactData.links.length * 100}ms` }}
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary/10 rounded">
                      <FileText className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-secondary font-semibold">Resume</h3>
                      <p className="text-sm text-muted-foreground">Download my full resume</p>
                    </div>
                  </div>
                  <Button asChild className="gap-2">
                    <a href={contactData.resumePath} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="mt-12 terminal-window p-6 text-center opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <p className="text-sm text-muted-foreground font-mono">
                <span className="text-primary">$</span> echo "Looking forward to connecting!"
                <br />
                <span className="text-secondary">→</span> Looking forward to connecting!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
