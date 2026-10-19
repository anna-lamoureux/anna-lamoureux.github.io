import type { ReactNode } from 'react';
import type { Accent } from '../content';

type Props = {
  id: string;
  accent: Accent;
  label: string;
  heading: string;
  children: ReactNode;
};

/** A titled block of the page with a colored caption above its heading. */
export function Section({ id, accent, label, heading, children }: Props) {
  return (
    <section id={id} className={`section c-${accent}`}>
      <span className="label">{label}</span>
      <h2>{heading}</h2>
      {children}
    </section>
  );
}
