import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  timelineEntries: TimelineEntry[] = [
    {
      event: {
        name: 'The Jackson Laboratory',
        date: 'August 2017 - Present',
        role: 'Intern, Associate Scientific Software Engineer & Scientific Software Engineer',
      },
      icon: 'fa fa-briefcase',
      bulletPoints: [
        'Design and develop user interfaces for backend systems to allow users to interact, analyze and download genomic data using Javascript/HTML/CSS and Angular Typescript',
        'Work and collaborate across several teams working on applications with varying levels of overlap and integration levels',
        'Initiate and lead a UX/UI working group as a collaboration of individuals across the organization',
        'Offer leadership and guidance to interns',
      ],
      examples: [
        {
          label: 'Synteny Browser',
          role: 'Primary Frontend Developer',
          github: 'https://github.com/TheJacksonLaboratory/syntenybrowserv2-client',
          url: 'https://syntenybrowser.jax.org/browser',
          publication: 'https://doi.org/10.1007/s00335-019-09821-4',
        },
        {
          label: 'HaploQA',
          role: 'D3 Contributor and Maintenance',
          github: 'https://github.com/TheJacksonLaboratory/haploqa',
          url: 'https://haploqa.jax.org/',
        },
        {
          label: 'DiversityDB',
          role: 'Primary Frontend Developer',
          url: 'https://divdb.jax.org/',
        },
        {
          label: 'Study Intake Platform',
          role: 'Contributor',
          url: 'https://studyintake.jax.org/',
        },
      ],
    },
    {
      event: {
        name: 'Moravian College',
        date: 'August 2014 - May 2017',
        role: 'Student, graduated with BS in Computer Science, minor in Mathematics',
      },
      icon: 'fa fa-graduation-cap',
      bulletPoints: [
        'Work as part of a student team in Senior Capstone in collaboration with Merck Co., Spring 2017',
        'Create websites for imaginary companies for Interactive Design course (see examples of work below), Fall 2016',
        'Collaborate with other students various projects in summer programs in collaboration with Merck Co., Summer 2015 & 2016',
        'Tutor math and computer science students, sponsored by Moravian Math & CS department, Fall 2015 - Spring 2017',
        'Moravian Computing Club President, Fall 2015 - Spring 2017; member, Fall 2014 - Spring 2017',
        'Moravian AAUW Vice President, Fall 2016 - Spring 2017; member, Fall 2015 - Spring 2017',
      ],
      examples: [
        {
          label: 'ICED',
          role: 'Interactive Design Course Assignment',
          url: 'http://students.moravianinteractive.com/spring2017/stacl06/iced/',
          disclaimer: true,
        },
        {
          label: "Bit o' Ink",
          role: 'Interactive Design Course Assignment',
          url: 'https://students.moravianinteractive.com/spring2017/stacl06/ink/',
          disclaimer: true,
        },
        {
          label: 'Mortons Moo',
          role: 'Interactive Design Course Assignment',
          url: 'http://students.moravianinteractive.com/spring2017/stacl06/mortons/',
          disclaimer: true,
        },
      ],
    },
  ];

  disclaimerMsg =
    'This was a course assignment and is being shared as it was when submitted for grading back in 2016; please excuse display bugs!';

  get year(): number {
    return new Date().getFullYear();
  }
  scrollDownToContact(): void {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}

export interface TimelineEntry {
  event: {
    name: string;
    date: string;
    role: string;
  };
  icon: string;
  bulletPoints: string[];
  examples: {
    label: string;
    role?: string;
    github?: string;
    publication?: string;
    url?: string;
    disclaimer?: boolean;
  }[];
}
