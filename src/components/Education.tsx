import type { EducationRecord } from "../data/profile";
import { RevealSection } from "./RevealSection";

type EducationProps = {
  education: EducationRecord;
};

export function Education({ education }: EducationProps) {
  return (
    <RevealSection className="section-education" aria-labelledby="education-title">
      <div className="education-card">
        <div>
          <div className="section-number">02</div>
          <h2 id="education-title">教育背景</h2>
        </div>
        <div className="education-main">
          <p className="record-period">{education.period}</p>
          <h3>{education.school}</h3>
          <p className="record-program">{education.program}</p>
          <p>{education.description}</p>
        </div>
        <div className="gpa-block">
          <span>GPA</span>
          <strong>{education.gpa}</strong>
        </div>
      </div>
    </RevealSection>
  );
}
