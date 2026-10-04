// All of the text on the site lives here.

export type Accent = 'blue' | 'mauve' | 'magenta' | 'peach' | 'green';

export const nav: { label: string; href: string; accent: Accent }[] = [
  { label: 'Work', href: '#work', accent: 'blue' },
  { label: 'About', href: '#about', accent: 'green' },
  { label: 'Experience', href: '#experience', accent: 'magenta' },
  { label: 'Contact', href: '#contact', accent: 'peach' },
];

export const intro = {
  label: 'Product engineer · Haverhill, Massachusetts',
  headline: 'I build the parts of software people',
  headlineAccent: 'look at all day.',
  paragraphs: [
    "Most of what I've built is the stuff people have open at work from nine to five: dashboards, editors, automation tools and, more recently, AI agents. I work across the stack (TypeScript, React, Node, Postgres). I also studied design along with computer science, which is probably why I can't leave a confusing screen alone.",
    "I've been at Vitally, a customer-success platform, since 2023. Before that I spent five years at The Jackson Laboratory building tools for genomics researchers.",
  ],
};

export type Project = {
  /** Small caption above the title, e.g. where and when */
  meta: string;
  title: string;
  tagline: string;
  /** Paragraphs shown when the card is expanded */
  more: string[];
  /** Caption color; defaults to the section color */
  accent?: Accent;
  /** Optional link shown after the expanded text */
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    meta: 'Vitally · 2026',
    title: 'An unreleased AI feature',
    tagline:
      "Scheduling and authoring tools for an AI feature that isn't public yet, built this year on a team of two.",
    more: [
      "I can't say much about what it does until it's announced, so this is only the engineering.",
      'The product already had AI infrastructure for running prompts and tool calls. We built a scheduling layer on top of it. I also built a chat flow that fills in and updates a form for you: the model proposes changes, and the person stays in charge of saving them.',
    ],
  },
  {
    meta: 'Vitally · 2026',
    title: 'Automation run management',
    tagline:
      'More control over automations already in flight, in a risky part of the codebase. The first project I ran on my own.',
    more: [
      "The original spec had three actions: stop a run, undo a run (stop it if it's still going, then reverse whatever can be reversed), and re-enroll. Each was meant to come in a single and a bulk version. Not everything can be reversed. A task that was created or updated can be put back. An email that has gone out cannot.",
      'What shipped was smaller: stop, undo, and bulk stop. Re-enroll and bulk undo were dropped because they were too risky for what they offered. Most of the work was backend, a good share of it refactoring, and very little of it shows in the interface.',
      'What I took away was less about the feature and more about the process. This is a complicated area where almost any change carries risk, so a lot of the job was deciding what was safe to do at all.',
    ],
  },
  {
    meta: 'Vitally · 2025–2026',
    title: 'A real draft system',
    tagline:
      'Moved drafts out of the browser and onto the server. I was part of the planning and took on half of the project.',
    more: [
      "There were drafts before, technically. They were kept in the browser's local storage, which meant one draft per type of record, gone after 30 days, gone if you switched browsers or opened a private window, and overwritten if you started something new. You couldn't browse them or find them again.",
      "The hard part of fixing that was that the product had only ever saved things once they were published and visible to everyone. Nothing in the database had ever been unfinished. We had to carefully introduce records that exist but don't count yet, and make sure the rest of the product treated them that way.",
    ],
  },
  {
    meta: 'Vitally · 2024–2026',
    title: 'Widgets and dashboards',
    tagline:
      'A long project with several threads: widget setup, dashboards, a shared widget library and per-customer dashboards.',
    more: [
      'The widget work began as a redesign of how widgets are configured. That sat on some very complicated code, so it was a reorganization as much as a redesign. The dashboard code and its presentation were updated separately. Throughout there was a lot of refactoring and cleanup, building to spec, and speaking up when something added more complexity than it was worth.',
      "The widget library is the piece I'd point to. It made it much easier to share a useful widget with your team, or to reuse your own across several dashboards, than it had been before.",
    ],
  },
  {
    meta: 'Vitally · 2023–2024',
    title: 'Outcome tracking',
    tagline:
      "A way to set a target for a customer, give it a deadline, and see at any point whether you're on course to hit it.",
    more: [
      'The interesting part is tracking progress over time. You need to know where something started, where it is now, and where it ought to be by this point, and there are a lot of edge cases hiding in those three questions.',
      'This was also the first time the company put a feature behind a paywall, so I handled that for the first time too.',
    ],
  },
  {
    meta: 'The Jackson Laboratory · 2017–2022',
    title: 'Genome comparison browser',
    tagline:
      'The Synteny Browser shows researchers which regions of the mouse and human genomes line up. I led the frontend.',
    more: [
      "Along with the frontend, I led the move from one big application to separate services. It's also the reason my name is on a paper in Mammalian Genome.",
    ],
    accent: 'magenta',
    link: { label: 'Read the paper', href: 'https://doi.org/10.1007/s00335-019-09821-4' },
  },
  {
    meta: 'Personal project · work in progress',
    title: 'Curio',
    tagline:
      'A self-hosted reference library for tabletop games that reads the rulebook PDFs you own and makes them searchable.',
    more: [
      "You bring your own PDFs (spells, creatures, items, rules) and it pulls out structured entries you can search, each with its source and page number. It runs on your own hardware. There's no marketplace, no buying books a second time, and no telemetry. Dungeons & Dragons 5e comes first, though it's built to handle other systems.",
      "It's a React and Node app with MongoDB, a search engine, and a small service that does the AI extraction, all in Docker. I design it and make the calls. Most of the code is written by AI coding agents working to my specs, which has been an education of its own.",
    ],
    accent: 'mauve',
  },
];

export const about = {
  label: 'About',
  heading: 'Who I am',
  paragraphs: [
    "I like knowing why something is being built before I build it, and I'll say so when a spec is going to confuse the people who have to use it. Sometimes the right fix is to take a feature out.",
    'I write things down. That means a plan before a big project, and a proper write-up when something breaks, including the times it was my change that broke it.',
    "I use AI coding tools every day now. They're useful, and they're confidently wrong often enough that I review their work the way I'd review anyone else's.",
    'I like helping people learn, when they ask. Lately that has meant tutoring someone through an accelerated Python course, mostly the fundamentals, and showing a friend how to use Claude and Claude Code to automate parts of their work. At Vitally I was the first point of contact for a new engineer during his first couple of weeks.',
    'Away from the computer I play D&D, 3D print small fixes for things around the apartment, read, and keep a cat named Inigo company.',
  ],
};

export type Employer = {
  years: string;
  name: string;
  roles?: { title: string; dates: string }[];
  note?: string;
};

export const experience: Employer[] = [
  {
    years: '2023 – now',
    name: 'Vitally',
    roles: [
      { title: 'Senior Product Engineer II', dates: 'Aug 2026 – now' },
      { title: 'Senior Software Engineer I', dates: 'Jun 2024 – Jul 2026' },
      { title: 'Software Engineer', dates: 'Jan 2023 – Jun 2024' },
    ],
  },
  {
    years: '2017 – 2022',
    name: 'The Jackson Laboratory',
    roles: [
      { title: 'Scientific Software Engineer', dates: 'Apr 2021 – Dec 2022' },
      { title: 'Associate Scientific Software Engineer', dates: 'Feb 2018 – Apr 2021' },
      { title: 'Computational Science Co-Op Associate', dates: 'Aug 2017 – Feb 2018' },
    ],
  },
  {
    years: 'Education',
    name: 'Moravian College',
    note: 'B.S. Computer Science, minor in Mathematics.',
  },
];

export const toolbox: { heading: string; text: string }[] = [
  {
    heading: 'Every day',
    text: 'TypeScript, React, Node.js, PostgreSQL, Jest, Git, Claude Code, Jira',
  },
  { heading: 'When the work calls for it', text: 'Elasticsearch, Playwright, OpenAPI, Storybook' },
  {
    heading: 'How the work gets done',
    text: 'Agile sprints, written implementation plans, prototyping, code review, feature flags, on-call',
  },
  { heading: 'Earlier in my career', text: 'Angular and D3, for five years of research software' },
  {
    heading: 'Design',
    text: "I studied graphic design and typography. These days I'm on the receiving end of Figma files more than I'm making them.",
  },
];

export const contact = {
  label: 'Contact',
  heading: 'Say hello',
  text: 'Email is the best way to reach me.',
  links: [
    { label: 'email', href: 'mailto:anna.lamoureux@gmail.com', accent: 'blue' },
    { label: 'github', href: 'https://github.com/anna-lamoureux', accent: 'mauve' },
    { label: 'linkedin', href: 'https://linkedin.com/in/anna-lamoureux', accent: 'magenta' },
  ] satisfies { label: string; href: string; accent: Accent }[],
};

export const owner = 'Anna Lamoureux';
