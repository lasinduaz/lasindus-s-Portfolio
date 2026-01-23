import { Layout } from "@/components/Layout";
import { aboutData } from "@/data/about";
import { Cog, Shield, TrendingUp } from "lucide-react";

const iconMap = {
  cog: Cog,
  shield: Shield,
  "trending-up": TrendingUp,
};

const About = () => {
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
                <span className="text-primary">~</span>
                <span className="text-muted-foreground">$ </span>
                <span className="text-foreground">cat about.md</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-primary glow-text mb-4">
              <span className="text-muted-foreground">// </span>
              About Me
            </h1>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Bio Section */}
            <div className="terminal-window p-8 opacity-0 animate-fade-in">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-primary/20">
                <div className="w-16 h-16 rounded bg-primary/10 flex items-center justify-center glow-box">
                  <span className="text-2xl text-primary font-bold">
                    {aboutData.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary">{aboutData.name}</h2>
                  <p className="text-secondary">{aboutData.role}</p>
                </div>
              </div>

              <div className="space-y-4">
                {aboutData.bio.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Philosophy Section */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
                <span className="text-muted-foreground">## </span>
                Philosophy
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {aboutData.philosophy.map((item, index) => {
                  const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Cog;
                  return (
                    <div
                      key={item.title}
                      className="terminal-window card-hover p-6 opacity-0 animate-fade-in"
                      style={{ animationDelay: `${200 + index * 100}ms` }}
                    >
                      <div className="p-3 bg-primary/10 rounded w-fit mb-4 glow-box">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Approach Section */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
                <span className="text-muted-foreground">## </span>
                Engineering Approach
              </h2>

              <div className="space-y-4">
                {aboutData.approach.map((item, index) => (
                  <div
                    key={item.title}
                    className="terminal-window card-hover p-6 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-secondary font-mono text-sm mt-1">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-primary font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Quote */}
            <div className="terminal-window p-8 text-center opacity-0 animate-fade-in" style={{ animationDelay: "900ms" }}>
              <blockquote className="text-lg text-primary glow-text italic">
                "{aboutData.tagline}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
