import { Layout } from "@/components/Layout";
import { SkillCategoryCard } from "@/components/SkillCategoryCard";
import { skillsData } from "@/data/skills";

const Skills = () => {
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
                <span className="text-foreground">cat skills.yaml</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-primary glow-text mb-4">
              <span className="text-muted-foreground">// </span>
              Skills & Technologies
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              A comprehensive toolkit built through hands-on experience. Organized by domain,
              these are the technologies and practices I use to build reliable systems.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skillsData.map((category, index) => (
              <SkillCategoryCard
                key={category.name}
                category={category}
                delay={index * 100}
              />
            ))}
          </div>

          {/* Footer Note */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="terminal-window p-6 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="text-secondary">echo</span> "Technology evolves. So do I."
                <br />
                <span className="text-primary">$</span> Always learning, always improving.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
