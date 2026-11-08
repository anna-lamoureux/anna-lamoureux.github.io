import type { Employer } from '../content';
import './RoleList.css';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "Aug 2017" -> a month count; "now" -> the current month. */
function toMonth(text: string): number {
  if (text.trim() === 'now') {
    const today = new Date();
    return today.getFullYear() * 12 + today.getMonth();
  }
  const [month, year] = text.trim().split(' ');
  return Number(year) * 12 + MONTHS.indexOf(month);
}

/** A role's start and end month; the end month counts, so a one-month role still shows. */
function span(dates: string): [number, number] {
  const [from, to] = dates.split('–');
  return [toMonth(from), toMonth(to) + 1];
}

/**
 * Employers down the page, each with its titles and dates. On wide screens every role also
 * gets a bar on its own line, placed on a shared time axis, so the list doubles as a small
 * timeline: promotions read as steps and the move between jobs shows at a glance.
 */
export function RoleList({ employers }: { employers: Employer[] }) {
  const spans = employers.flatMap((employer) => (employer.roles ?? []).map((r) => span(r.dates)));
  const min = Math.min(...spans.map(([start]) => start));
  const max = Math.max(...spans.map(([, end]) => end));
  const pct = (month: number) => ((month - min) / (max - min)) * 100;

  // A labelled rule every other January inside the range.
  const ticks: number[] = [];
  for (let year = Math.ceil(min / 12); year * 12 <= max; year++) {
    if (year % 2 === 0) ticks.push(year);
  }

  return (
    <div className="role-list-wrap">
      <div className="role-list-grid" aria-hidden="true">
        {ticks.map((year) => (
          <span key={year} style={{ left: `${pct(year * 12)}%` }} />
        ))}
      </div>

      <ul className="role-list">
        {employers.map((employer) => (
          <li key={employer.name}>
            <span className="role-list-years">{employer.years}</span>
            <div>
              <h3>{employer.name}</h3>
              {employer.roles && (
                <ol className="role-list-roles">
                  {employer.roles.map((role) => {
                    const [start, end] = span(role.dates);
                    return (
                      <li key={role.title}>
                        <div className="role-list-role">
                          <b>{role.title}</b>
                          <span>{role.dates}</span>
                        </div>
                        <div className="role-list-track" aria-hidden="true">
                          <span
                            className="role-list-bar"
                            style={{ left: `${pct(start)}%`, right: `${100 - pct(end)}%` }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ol>
              )}
              {employer.note && <p>{employer.note}</p>}
            </div>
          </li>
        ))}
      </ul>

      <div className="role-list-axis" aria-hidden="true">
        {ticks.map((year) => (
          <span key={year} style={{ left: `${pct(year * 12)}%` }}>
            {year}
          </span>
        ))}
      </div>
    </div>
  );
}
