import { useState } from "react";
import { Copy, Download, FileText, Github, Linkedin, Mail, Check } from "lucide-react";
import { toast } from "sonner";
import { Layout } from "@/components/Layout";
import { contactData } from "@/data/contact";

const channelIcons = { mail: Mail, github: Github, linkedin: Linkedin };

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("lasinduaz@gmail.com");
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error("Unable to copy email");
    }
  };

  return (
    <Layout>
      <section className="contact-terminal-page">
        <div className="contact-terminal-window">
          <div className="contact-terminal-titlebar">
            <span className="contact-dot contact-dot-red" />
            <span className="contact-dot contact-dot-yellow" />
            <span className="contact-dot contact-dot-green" />
            <span className="contact-terminal-title">lasindu@kali: ~/contact</span>
          </div>

          <div className="contact-terminal-body">
            <div className="contact-kali-prompt">
              <div><span>┌──(</span><b>lasindu</b><span>㉿</span><b>kali</b><span>)-[</span><strong>~/contact</strong><span>]</span></div>
              <div><span>└─</span><b>$</b> cat contact.md<i /></div>
            </div>

            <h1 className="contact-page-title">{contactData.headline}</h1>
            <p className="contact-page-sub">{contactData.subheadline}</p>

            <div className="contact-channels">
              {contactData.links.map((link) => {
                const Icon = channelIcons[link.icon as keyof typeof channelIcons] || Mail;
                return (
                  <div className="contact-channel" key={link.name}>
                    <div className="contact-channel-icon"><Icon aria-hidden="true" /></div>
                    <div className="contact-channel-main">
                      <div className="contact-channel-label">{link.name}</div>
                      <div className="contact-channel-value">{link.displayValue}</div>
                    </div>
                    <div className="contact-channel-actions">
                      {link.copyable && <button className="contact-btn" type="button" onClick={copyEmail}><>{copied ? <Check /> : <Copy />}</>{copied ? "copied" : "copy"}</button>}
                      <a className="contact-btn" href={link.url} target={link.name === "Email" ? undefined : "_blank"} rel={link.name === "Email" ? undefined : "noopener noreferrer"}>open</a>
                    </div>
                  </div>
                );
              })}

              <div className="contact-channel contact-channel-muted">
                <div className="contact-channel-icon"><FileText aria-hidden="true" /></div>
                <div className="contact-channel-main">
                  <div className="contact-channel-label">Resume</div>
                  <div className="contact-channel-value">Download my full resume</div>
                </div>
                <div className="contact-channel-actions">
                  <a className="contact-btn contact-btn-filled" href={contactData.resumePath} download><Download /> download pdf</a>
                </div>
              </div>
            </div>

            <div className="contact-terminal-footer">
              <div><span>$</span> echo "Looking forward to connecting!"</div>
              <div><b>→</b> Looking forward to connecting!</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
