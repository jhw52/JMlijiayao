import type { FocusGroup } from "../data/profile";
import { RevealSection } from "./RevealSection";

type ProfessionalFocusProps = {
  groups: FocusGroup[];
};

export function ProfessionalFocus({ groups }: ProfessionalFocusProps) {
  return (
    <RevealSection id="focus" className="section-focus" aria-labelledby="focus-title">
      <div className="focus-heading">
        <div className="section-number">03</div>
        <h2 id="focus-title">专业能力</h2>
        <p>以临床检查、实验室流程和基础治疗技术为核心，把知识落到可观察、可记录、可复盘的实践动作中。</p>
      </div>
      <div className="focus-grid">
        {groups.map((group) => (
          <article className="focus-module" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}
