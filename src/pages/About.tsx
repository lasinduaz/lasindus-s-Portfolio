import { Layout } from "@/components/Layout";

const About = () => (
  <Layout>
    <section className="about-terminal-page">
      <div className="about-terminal-window">
        <div className="about-terminal-titlebar">
          <span className="about-dot about-dot-red" />
          <span className="about-dot about-dot-yellow" />
          <span className="about-dot about-dot-green" />
          <span className="about-terminal-title">lasindu@kali: ~/about</span>
        </div>
        <div className="about-terminal-body">
          <div className="about-kali-prompt">
            <div><span className="about-prompt-faint">┌──(</span><span className="about-mint">lasindu</span><span className="about-prompt-faint">㉿</span><span className="about-mint">kali</span><span className="about-prompt-faint">)-[</span><span className="about-sky">~/about</span><span className="about-prompt-faint">]</span></div>
            <div><span className="about-prompt-faint">└─</span><span className="about-mint">$</span> glow -p about.md<span className="about-cursor" /></div>
          </div>
          <article className="about-glow">
            <h1>Lasindu Samarajeewa</h1>
            <h2>DevOps Engineer</h2>
            <p>I build software, understand the systems behind it, and continuously look for better ways to engineer it.</p>
            <p>My focus is software engineering with a strong edge in <strong>DevOps, cloud, automation, and system architecture</strong> — connecting development with the infrastructure that makes software reliable in the real world.</p>
            <p>I’m driven by difficult problems, strong engineering principles, and the process of turning ideas into systems that work.</p>
          </article>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
