import { about, contact, experience, intro, nav, owner, projects, toolbox } from './content';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { LinkButton } from './components/LinkButton';
import { RoleList } from './components/RoleList';
import { Section } from './components/Section';
import { Toolbox } from './components/Toolbox';
import { WorkCard } from './components/WorkCard';
import './components/CardGrid.css';

export function App() {
  return (
    <div className="page">
      <Header name={owner} links={nav} />

      <main id="top">
        <Intro {...intro} />

        <Section id="about" accent="green" label={about.label} heading={about.heading}>
          <div className="prose">
            {about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </Section>

        <Section id="experience" accent="magenta" label="Experience" heading="Where I've Been">
          <RoleList employers={experience} />
        </Section>

        <Section id="projects" accent="blue" label="Projects" heading="Some of what I've worked on">
          <div className="card-grid">
            {projects.map((project) => (
              <WorkCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="toolbox" accent="mauve" label="Toolbox" heading="What I use">
          <Toolbox groups={toolbox} />
        </Section>

        <Section id="contact" accent="peach" label={contact.label} heading={contact.heading}>
          <div className="prose">
            <p>{contact.text}</p>
          </div>
          <div className="link-buttons">
            {contact.links.map((link) => (
              <LinkButton key={link.label} href={link.href} accent={link.accent}>
                {link.label}
              </LinkButton>
            ))}
          </div>
        </Section>
      </main>

      <Footer name={owner} />
    </div>
  );
}
