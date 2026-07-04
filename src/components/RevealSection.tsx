import type { HTMLAttributes, ReactNode } from "react";

type RevealSectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function RevealSection({
  children,
  className = "",
  ...props
}: RevealSectionProps) {
  return (
    <section className={`reveal-section ${className}`.trim()} {...props}>
      {children}
    </section>
  );
}
