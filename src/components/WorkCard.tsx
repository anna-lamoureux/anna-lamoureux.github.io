import type { Project } from '../content';
import './WorkCard.css';

/**
 * One project: a caption, a one-line title and a short tagline.
 * If the project has more to say, it appears in a bubble on hover or keyboard focus.
 */
export function WorkCard({ project }: { project: Project }) {
  const { meta, title, tagline, more, links, personal } = project;
  const hasMore = Boolean(more?.length);

  return (
    <article
      className={`work-card${personal ? ' work-card-personal' : ''}`}
      tabIndex={hasMore ? 0 : undefined}
    >
      <span className="work-card-meta">{meta}</span>
      <h3>{title}</h3>
      <p className="work-card-tagline">{tagline}</p>
      <span className="work-card-hint" aria-hidden="true">
        {hasMore ? 'More' : ''}
      </span>

      {hasMore && (
        <div className="work-card-more">
          {more!.map((text) => (
            <p key={text}>{text}</p>
          ))}
          {links && (
            <p className="work-card-links">
              {links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </p>
          )}
        </div>
      )}
    </article>
  );
}
