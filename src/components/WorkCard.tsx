import { useRef, useState, type MouseEvent } from 'react';
import type { Project } from '../content';
import './WorkCard.css';

/** Gap between the cursor and the bubble, and between the bubble and the window edge. */
const OFFSET = 18;
const EDGE = 12;

/**
 * One project: a caption, a one-line title and a short tagline.
 * If the project has more to say, a bubble follows the cursor while it is over the card.
 * With the keyboard (or a tap), the bubble opens under the card instead.
 */
export function WorkCard({ project }: { project: Project }) {
  const { meta, title, tagline, more, links, personal } = project;
  const hasMore = Boolean(more?.length);

  const bubble = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState<{ left: number; top: number } | null>(null);

  function follow(event: MouseEvent) {
    const width = bubble.current?.offsetWidth ?? 0;
    const height = bubble.current?.offsetHeight ?? 0;

    // Sit below and to the right of the cursor, flipping or sliding to stay on screen.
    let left = event.clientX + OFFSET;
    if (left + width > window.innerWidth - EDGE) left = event.clientX - OFFSET - width;
    let top = event.clientY + OFFSET;
    if (top + height > window.innerHeight - EDGE) top = window.innerHeight - EDGE - height;

    setCursor({ left: Math.max(EDGE, left), top: Math.max(EDGE, top) });
  }

  return (
    <article
      className={`work-card${personal ? ' work-card-personal' : ''}`}
      tabIndex={hasMore ? 0 : undefined}
      onMouseMove={hasMore ? follow : undefined}
      onMouseLeave={() => setCursor(null)}
    >
      <span className="work-card-meta">{meta}</span>
      <h3>{title}</h3>
      <p className="work-card-tagline">{tagline}</p>

      <div className="work-card-footer">
        <span className="work-card-hint" aria-hidden="true">
          {hasMore ? 'More' : ''}
        </span>
        {links?.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      {hasMore && (
        <div
          ref={bubble}
          className={`work-card-more${cursor ? ' work-card-more-following' : ''}`}
          style={cursor ?? undefined}
        >
          {more!.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      )}
    </article>
  );
}
