import type { Accent } from '../content';
import { ThemeToggle } from './ThemeToggle';
import './Header.css';

type Props = {
  name: string;
  links: { label: string; href: string; accent: Accent }[];
};

export function Header({ name, links }: Props) {
  return (
    <header className="header">
      <a className="header-name" href="#top">
        {name}
      </a>
      <nav className="header-nav" aria-label="Sections">
        {links.map((link) => (
          <a key={link.href} className={`header-link c-${link.accent}`} href={link.href}>
            {link.label}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
