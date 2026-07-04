import { RevealSection } from "./RevealSection";

type CertificatesProps = {
  certificates: readonly string[];
  statement: string;
};

export function Certificates({ certificates, statement }: CertificatesProps) {
  return (
    <RevealSection className="section-certificates" aria-labelledby="cert-title">
      <div className="certificate-list">
        <div className="section-number">05</div>
        <h2 id="cert-title">证书与能力</h2>
        <ul>
          {certificates.map((certificate) => (
            <li key={certificate}>{certificate}</li>
          ))}
        </ul>
      </div>
      <blockquote className="personal-statement">
        <p>{statement}</p>
      </blockquote>
    </RevealSection>
  );
}
