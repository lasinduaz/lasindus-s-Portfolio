import { useState } from "react";
import { Layout } from "@/components/Layout";
import { skillsData } from "@/data/skills";

const certifications = [
  { name: "Jenkins: Automating Software Development and System Administration", issuer: "LinkedIn Learning", issued: "2026-07", ref: "30d9aa14...af26a", url: "https://www.linkedin.com/learning/certificates/30d9aa144de94becd566939b49ac7dda98a56a7cfeca1943fa2b42aa18caf26a" },
  { name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services (AWS)", issued: "2026-03", ref: "linkedin.com/in/lasindusamarajeewa", url: "https://www.linkedin.com/in/lasindusamarajeewa/overlay/Certifications/1311484959/treasury/?profileId=ACoAAEGC6tUBiTeCbt3TQclrvNb-vehLTFsApqk" },
  { name: "API Penetration Testing", issuer: "APIsec University", issued: "2025-08", ref: "0e4ea2de...36aeaa", url: "https://www.credly.com/badges/0e4ea2de-b382-4ac4-9be6-c6012436aeaa/linked_in_profile" },
  { name: "API Security Fundamentals", issuer: "APIsec University", issued: "2025-01", ref: "513f593d...f43930d8", url: "https://www.credly.com/badges/513f593d-c8e2-4fbc-b627-5f0ff43930d8/linked_in_profile" },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState<"skills" | "certs">("skills");
  const switchTab = (tab: "skills" | "certs") => setActiveTab(tab);

  return (
    <Layout>
      <section className="skills-terminal-page">
        <div className="skills-terminal-window">
          <div className="skills-terminal-titlebar"><span className="skills-dot skills-dot-red" /><span className="skills-dot skills-dot-yellow" /><span className="skills-dot skills-dot-green" /><span className="skills-terminal-title">lasindu@kali: ~/{activeTab}</span></div>
          <div className="skills-terminal-tabs" role="tablist" aria-label="Skills and certifications">
            {(["skills", "certs"] as const).map((tab) => (
              <button key={tab} id={`tab-${tab}`} className="skills-terminal-tab" role="tab" type="button" aria-selected={activeTab === tab} aria-controls={`panel-${tab}`} tabIndex={activeTab === tab ? 0 : -1} onClick={() => switchTab(tab)} onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { const next = tab === "skills" ? "certs" : "skills"; switchTab(next); document.getElementById(`tab-${next}`)?.focus(); } }}><span>❯_</span>{tab}</button>
            ))}
          </div>
          <div className="skills-terminal-body">
            {activeTab === "skills" ? (
              <div id="panel-skills" role="tabpanel" aria-labelledby="tab-skills">
                <div className="skills-kali-prompt"><div>┌──(<span>lasindu</span>㉿<span>kali</span>)-[<b>~/skills</b>]</div><div>└─<span>$</span> tmux attach -t skills<i /></div></div>
                <div className="tmux-frame"><div className="tmux-panes">{skillsData.map((category, index) => <section className={`tmux-pane ${index === 0 ? "active" : ""}`} key={category.name}><div className="tmux-pane-tab">{index}:{category.name.toLowerCase()}{index === 0 ? "*" : ""}</div><div className="tmux-pane-comment"># {index === 0 ? "infrastructure, containers, pipelines" : index === 1 ? "languages I build with" : index === 2 ? "frontend & interfaces" : "daily drivers"}</div><ul>{category.skills.map((skill) => <li key={skill}><span>✓</span>{skill}</li>)}</ul></section>)}</div><div className="tmux-status"><strong>skills</strong><span>{new Date().toLocaleTimeString()}</span></div></div>
              </div>
            ) : (
              <div id="panel-certs" role="tabpanel" aria-labelledby="tab-certs">
                <div className="skills-kali-prompt"><div>┌──(<span>lasindu</span>㉿<span>kali</span>)-[<b>~/certs</b>]</div><div>└─<span>$</span> ./verify-certs.sh --format=pretty<i /></div></div>
                <div className="cert-scan-list">{certifications.map((cert) => <article className="cert-scan-block" key={cert.name}><div className="cert-scan-head">✓ VERIFIED</div><h2>{cert.name}</h2><div className="cert-scan-meta"><div><span>issuer</span><strong>{cert.issuer}</strong></div><div><span>issued</span><strong className="cert-date">{cert.issued}</strong></div><div><span>ref</span><strong><a href={cert.url} target="_blank" rel="noopener noreferrer">{cert.ref}</a></strong></div></div></article>)}</div>
                <div className="cert-scan-summary">$ <span>4/4 credentials verified · 0 pending · scan complete</span></div>
              </div>
            )}
            <footer className="skills-terminal-footer">$ <span>{activeTab === "skills" ? "Technology evolves. So do I. Always learning, always improving." : "All credentials verified. Keep learning."}</span></footer>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
