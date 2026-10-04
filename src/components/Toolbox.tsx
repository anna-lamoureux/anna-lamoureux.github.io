import './Toolbox.css';

export function Toolbox({ groups }: { groups: { heading: string; text: string }[] }) {
  return (
    <div className="toolbox">
      {groups.map((group) => (
        <div key={group.heading}>
          <b>{group.heading}</b>
          {group.text}
        </div>
      ))}
    </div>
  );
}
