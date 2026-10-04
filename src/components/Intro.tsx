import './Intro.css';

type Props = {
  label: string;
  headline: string;
  headlineAccent: string;
  paragraphs: string[];
};

export function Intro({ label, headline, headlineAccent, paragraphs }: Props) {
  return (
    <div className="intro">
      <div>
        <span className="label">{label}</span>
        <h1>
          {headline} <em>{headlineAccent}</em>
        </h1>
      </div>
      {paragraphs.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
}
