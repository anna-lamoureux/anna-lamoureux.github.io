import type { ToolGroup } from '../content';
import './Toolbox.css';

/** Skills by kind: a label on the left, current tools as chips, and a quieter note underneath. */
export function Toolbox({ groups }: { groups: ToolGroup[] }) {
  return (
    <dl className="toolbox">
      {groups.map((group) => (
        <div key={group.heading} className="toolbox-row">
          <dt>{group.heading}</dt>
          <dd>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {group.note && <p>{group.note}</p>}
          </dd>
        </div>
      ))}
    </dl>
  );
}
