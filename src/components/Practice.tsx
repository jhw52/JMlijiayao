import type { PracticeRecord } from "../data/profile";
import { RevealSection } from "./RevealSection";

type PracticeProps = {
  practice: PracticeRecord;
};

const logItems: Array<{
  label: string;
  value: keyof Pick<
    PracticeRecord,
    "period" | "role" | "observation" | "method" | "reflection"
  >;
}> = [
  { label: "Date", value: "period" },
  { label: "Role", value: "role" },
  { label: "Observation", value: "observation" },
  { label: "Method", value: "method" },
  { label: "Reflection", value: "reflection" },
];

export function Practice({ practice }: PracticeProps) {
  return (
    <RevealSection
      id="practice"
      className="section-practice"
      aria-labelledby="practice-title"
    >
      <div className="practice-intro">
        <div className="section-number">04</div>
        <h2 id="practice-title">实践经历</h2>
        <p>{practice.title}</p>
      </div>
      <article className="lab-log">
        {logItems.map((item) => (
          <div className="log-row" key={item.label}>
            <span>{item.label}</span>
            <p>{practice[item.value]}</p>
          </div>
        ))}
      </article>
    </RevealSection>
  );
}
