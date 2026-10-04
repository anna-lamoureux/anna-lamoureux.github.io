import type { Project } from '../content';
import './WorkCard.css';

/** One project: a caption, a one-line title, a short tagline, and more detail on demand. */
export function WorkCard({ project }: { project: Project }) {
  const { meta, title, tagline, more, accent, link } = project;

  return (
    <article className={`work-card${accent ? ` c-${accent}` : ''}`}>
      <span className="work-card-meta">{meta}</span>
      <h3>{title}</h3>
      <p className="work-card-tagline">{tagline}</p>
      <details>
        <summary>More</summary>
        {more.map((text) => (
          <p key={text}>{text}</p>
        ))}
        {link && (
          <p>
            <a href={link.href}>{link.label}</a>
          </p>
        )}
      </details>
    </article>
  );
}
