import { RevealSection } from "./RevealSection";

type AboutProps = {
  text: string;
};

export function About({ text }: AboutProps) {
  return (
    <RevealSection id="profile" className="section-about">
      <div className="section-number">01</div>
      <div className="about-layout">
        <h2>关于我</h2>
        <p>{text}</p>
      </div>
    </RevealSection>
  );
}
