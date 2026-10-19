// All of the text on the site lives here.

export type Accent = 'blue' | 'mauve' | 'magenta' | 'peach' | 'green';

export const nav: { label: string; href: string; accent: Accent }[] = [
  { label: 'About', href: '#about', accent: 'green' },
  { label: 'Experience', href: '#experience', accent: 'magenta' },
  { label: 'Projects', href: '#projects', accent: 'blue' },
  { label: 'Contact', href: '#contact', accent: 'peach' },
];

export const intro = {
  label: 'Product engineer · Haverhill, Massachusetts',
  headline: 'Good software gets out of your way.',
  headlineAccent: 'Great software knows when not to.',
  paragraphs: [
    "I'm a software engineer who advocates for users whenever possible, and I've spent nine years building and supporting productivity software that people rely on. I pick up technical skills fast: I went from a frontend Angular developer on small research applications to a full-stack engineer on a fast-paced team supporting a 24/7 live-service platform used by customers all over the world.",
    "I ask questions early, flag risks to the stack or the users before they become problems, and test aggressively. I poke at the edges of features to find where their assumptions break, and I try to leave code cleaner than I found it, hoping to help systems age gracefully. When the inevitable unknown unknowns strike, as they always do, I write down what happened so the next person doesn't have to make the same mistake. Over the past year I've been working agentic AI into my development cycle to ship the same quality of code faster, while also building agentic AI features into the product.",
  ],
};

export type Project = {
  /** Small caption above the title: where and when */
  meta: string;
  title: string;
  tagline: string;
  /** Paragraphs shown in the bubble that follows the cursor over the card. Leave out for no bubble. */
  more?: string[];
  /** Links shown along the bottom of the card */
  links?: { label: string; href: string }[];
  /** Personal projects get a different caption colour */
  personal?: boolean;
};

export const projects: Project[] = [
  {
    meta: 'Vitally · 2026',
    title: 'Unreleased AI agent work',
    tagline:
      "This one isn't formally announced yet, and I won't be the one to leak it. My part in it is a conversation for an interview.",
  },
  {
    meta: 'Vitally · 2026',
    title: 'Automation run management',
    tagline:
      'Gave users a way to stop an automation run in progress, or undo what a run had already done, without contacting support.',
    more: [
      'Automations can change thousands of records, and a mistake used to mean a support ticket and manual data repair. Stopping or undoing a run was technically possible before, but only certain people had the button and you had to get the timing right. This project made it a first-class action: stop and undo for individual runs, and stop in bulk. A quality-of-life update more than a flashy one.',
      "Not everything is reversible: a created task can be removed, but a sent email can't be unsent. Most of the work was backend, in an older part of the codebase where changes carry risk, so much of the effort went into refactoring safely and deciding what could be offered reliably.",
    ],
  },
  {
    meta: 'Vitally · 2025–2026',
    title: 'A more robust draft system',
    tagline:
      'Replaced browser-only drafts with drafts saved to the server, so unfinished work survives across devices and sessions.',
    more: [
      "Drafts used to live in the browser's local storage: one per record type, expiring after 30 days, and lost when switching browsers or starting something new.",
      'The product had only ever stored records once they were published. The project introduced saved but unpublished records and made sure search, reporting, automations and integrations ignored them. I was involved in the planning and built half of the record types.',
    ],
  },
  {
    meta: 'Vitally · 2024–2026',
    title: 'Widgets and dashboards',
    tagline:
      "A multi-part overhaul of how reporting widgets are configured, how dashboards present them, and how they're shared.",
    more: [
      'Widgets and dashboards had existed for years but were tedious to set up, confusing to configure, and sat on code that had grown unwieldy. A teammate and I updated them in stages: widget configuration first, then how widgets and dashboards are presented.',
      "We then added scoped dashboards, where the widgets on a user, account or organization page show only that record's data, and a widget library that makes useful widgets easier to share and reuse.",
    ],
  },
  {
    meta: 'Vitally · 2023–2024',
    title: 'Goals: target tracking',
    tagline:
      'A way for teams to standardize the targets they manage accounts against, with live progress toward a deadline.',
    more: [
      'Customers wanted to normalize their processes and target metrics across the accounts they manage.',
      'A goal has a deadline and any number of conditions, measured manually or automatically, that must be met for it to count as achieved. Progress is tracked live as the deadline approaches. Goals can be saved as templates, and they show up in tables, widgets, documents and automations.',
    ],
  },
  {
    meta: 'The Jackson Laboratory · 2017–2022',
    title: 'JAX Synteny Browser',
    tagline:
      'An interactive browser for comparing the mouse and human genomes, used to find candidate genes for human disease.',
    more: [
      'A researcher studying a region of one genome can see the matching (syntenic) region in the other and highlight genes by function, phenotype or disease association. The published examples include narrowing down candidate genes for lung cancer susceptibility and type 2 diabetes.',
      "I worked on its D3 visualizations, then rebuilt the application from an older JavaScript codebase into an Angular single-page app with a redesigned interface. It was published in Mammalian Genome in 2019, and I'm the second author.",
    ],
    links: [
      { label: 'Paper', href: 'https://doi.org/10.1007/s00335-019-09821-4' },
      { label: 'Source', href: 'https://github.com/TheJacksonLaboratory/syntenybrowser' },
    ],
  },
  {
    meta: 'The Jackson Laboratory · 2017–2022',
    title: 'GenomeMUSter',
    tagline:
      'A search interface for one of the largest collections of mouse genetic variation, part of the Mouse Phenome Database.',
    more: [
      'GenomeMUSter combines variant data for 657 mouse strains across more than 100 million sites. Researchers enter genomic regions and the strains they care about and get back a grid of variants, with imputed values shown or filtered by confidence.',
      "I built the interface from scratch in Angular. The service is described in Genome Research (2024) and the database in Mammalian Genome (2023), and I'm a co-author on both.",
    ],
    links: [
      { label: '2024 paper', href: 'https://genome.cshlp.org/content/34/1/145' },
      { label: '2023 paper', href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10627943' },
    ],
  },
  {
    meta: 'The Jackson Laboratory · 2017–2022',
    title: 'HaploQA',
    tagline:
      'An open-source tool for checking the genetic quality of laboratory mice from their genotyping data.',
    more: [
      "Labs upload data from standard mouse genotyping arrays, and HaploQA reconstructs each sample's haplotypes to show which founder strain each stretch of the genome came from.",
      'I maintained the application, built and extended its D3 visualizations, and added support for a newer genotyping array.',
    ],
    links: [{ label: 'Source', href: 'https://github.com/TheJacksonLaboratory/haploqa' }],
  },
  {
    meta: 'Personal project · work in progress',
    title: 'Curio',
    tagline:
      'A self-hosted reference library for tabletop games that reads the rulebook PDFs you own and makes them searchable.',
    more: [
      'You bring your own PDFs (spells, creatures, items, rules) and it extracts structured, searchable entries, each with its source and page number. It runs on your own hardware, with no marketplace and no telemetry. Dungeons & Dragons 5e comes first.',
      'It is a React and Node app with MongoDB, a search engine, and a small service for the AI extraction, all in Docker. I design it and make the decisions, and AI coding agents write most of the code to my specs. The code is private for now.',
    ],
    personal: true,
  },
];

export const about = {
  label: 'About',
  heading: 'Who I am',
  paragraphs: [
    "I feel like I've been a product engineer for longer than I've had the official title. Even as a frontend developer at the start of my career, I was concerned with the design system and the user experience. I've always wanted to make software that people use and enjoy using. I think the best features are the ones that seem simple, and great design can often go unacknowledged because it largely stays out of the user's way. As an engineer, I like being included in the product discussions early: I want to know who the users are and what problems we're trying to solve, so the hundred small decisions the mockups may not cover get made through their eyes. Happy, productive users translate to contract renewals for the business.",
    // Personal paragraph: Anna's own words.
    'I grew up in Downeast Maine, left for college in Boston, MA, later transferring to Moravian College (now Moravian University) in Bethlehem, PA, before returning to Maine for a few years to work. The pandemic and the move to fully working from home led me out to the Midwest for a few years, but I gravitated back to New England and landed in Haverhill, MA, the place I still call home with my cat Inigo. Away from work I play TTRPGs and video games with friends when time allows, cook, snowboard when there\u2019s snow, and keep a collection of mechanical keyboards that I still tinker with from time to time. Lately I\u2019ve been taking on more home technology projects that mean taking more ownership of my data, such as replacing all of my proprietary smart home devices to work with Home Assistant and preferring locally hosted, open-source solutions.',
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

export type ToolGroup = {
  heading: string;
  /** What I use now */
  items: string[];
  /** A quieter second line: things used less often, or in the past */
  note?: string;
};

export const toolbox: ToolGroup[] = [
  { heading: 'Languages', items: ['TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS'] },
  {
    heading: 'Frontend',
    items: [
      'React',
      'Redux',
      'Storybook',
      'Design systems',
      'Accessibility',
      'Recharts',
      'D3',
      'Angular',
    ],
  },
  {
    heading: 'Backend and data',
    items: [
      'Node.js',
      'REST APIs',
      'OpenAPI',
      'Objection/Knex',
      'PostgreSQL',
      'Elasticsearch',
      'Cron and one-off support jobs',
      'Zero-downtime migrations',
    ],
  },
  {
    heading: 'AI',
    items: [
      'LLM tool calling',
      'AI agent features',
      'Validating model output',
      'Claude Code',
      'Cursor',
      'AI-assisted development',
    ],
    note: 'Every day, for planning, building and reviewing. I also build AI features into the product.',
  },
  {
    heading: 'Testing and reliability',
    items: [
      'Jest',
      'React Testing Library',
      'Playwright',
      'Buildkite CI',
      'Feature flags',
      'Incident response',
      'On-call',
      'Sentry',
      'Honeycomb',
      'FullStory',
      'Product analytics',
    ],
  },
  {
    heading: 'Practices',
    items: [
      'Agile',
      'Technical planning',
      'Roadmapping',
      'Prototyping',
      'Code review',
      'Cross-functional collaboration',
      'Git',
      'Jira',
      'Figma handoff',
    ],
  },
  {
    heading: 'Design',
    items: ['Figma', 'Graphic design', 'Typography', 'Web design'],
    note: "Took several design courses in college, and used to design UIs before building them earlier in my career. At Vitally I've mostly been on the receiving end of Figma files, though I've also built from vibe-coded prototypes.",
  },
];

export const contact = {
  label: 'Contact',
  heading: 'Say hello',
  links: [
    { label: 'email', href: 'mailto:anna.lamoureux@gmail.com', accent: 'blue' },
    { label: 'linkedin', href: 'https://linkedin.com/in/anna-lamoureux', accent: 'magenta' },
    { label: 'github', href: 'https://github.com/anna-lamoureux', accent: 'mauve' },
  ] satisfies { label: string; href: string; accent: Accent }[],
};

export const owner = 'Anna Lamoureux';
