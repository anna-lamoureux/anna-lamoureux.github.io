import type { ReactNode } from 'react';
import type { Accent } from '../content';
import './LinkButton.css';

type Props = {
  href: string;
  accent: Accent;
  children: ReactNode;
};

/** A link styled as a square tile with a coloured offset shadow. */
export function LinkButton({ href, accent, children }: Props) {
  return (
    <a className={`link-button c-${accent}`} href={href}>
      {children}
    </a>
  );
}
