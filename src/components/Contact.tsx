import { useState } from "react";
import { RevealSection } from "./RevealSection";

type ContactProps = {
  email: string;
  closing: string;
};

export function Contact({ email, closing }: ContactProps) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.setAttribute("readonly", "");
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 1800);
    } catch {
      setCopyState("failed");
      window.setTimeout(() => setCopyState("idle"), 1800);
    }
  };

  return (
    <RevealSection id="contact" className="section-contact" aria-labelledby="contact-title">
      <div>
        <div className="section-number">06</div>
        <h2 id="contact-title">联系</h2>
      </div>
      <div className="contact-card">
        <p>{closing}</p>
        <div className="email-actions">
          <a className="email-link" href={`mailto:${email}`}>
            {email}
          </a>
          <button className="copy-email" type="button" onClick={copyEmail}>
            {copyState === "copied" ? "已复制" : copyState === "failed" ? "复制失败" : "复制"}
          </button>
        </div>
      </div>
    </RevealSection>
  );
}
