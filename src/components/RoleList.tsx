import type { Employer } from '../content';
import './RoleList.css';

/** Employers down the page, each with its titles and dates. */
export function RoleList({ employers }: { employers: Employer[] }) {
  return (
    <ul className="role-list">
      {employers.map((employer) => (
        <li key={employer.name}>
          <span className="role-list-years">{employer.years}</span>
          <div>
            <h3>{employer.name}</h3>
            {employer.roles && (
              <ol className="role-list-roles">
                {employer.roles.map((role) => (
                  <li key={role.title}>
                    <b>{role.title}</b>
                    <span>{role.dates}</span>
                  </li>
                ))}
              </ol>
            )}
            {employer.note && <p>{employer.note}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
