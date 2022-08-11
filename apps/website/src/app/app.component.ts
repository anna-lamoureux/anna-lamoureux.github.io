import { Component } from '@angular/core';
import {PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  timelineEntries: TimelineEntry[] = [
    {
      event: {
        name: 'event1',
        date: 'date1',
      },
      icon: PrimeIcons.BRIEFCASE,
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' +
        'magna aliqua. Felis bibendum ut tristique et egestas quis ipsum. Odio facilisis mauris sit amet massa vitae tortor.' +
        'Enim diam vulputate ut pharetra sit amet aliquam id diam. Eu scelerisque felis imperdiet proin fermentum leo vel' +
        'orci porta. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Sagittis vitae et leo duis ut' +
        'diam quam nulla. Nulla aliquet enim tortor at auctor urna nunc id cursus. In fermentum posuere urna nec tincidunt' +
        'praesent semper. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Aliquet risus' +
        'feugiat in ante metus. Et netus et malesuada fames ac turpis egestas. Mauris cursus mattis molestie a iaculis.' +
        'Enim sed faucibus turpis in eu.'
    },
    {
      event: {
        name: 'event2',
        date: 'date2',
      },
      icon: PrimeIcons.DISCORD,
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' +
        'magna aliqua. Felis bibendum ut tristique et egestas quis ipsum. Odio facilisis mauris sit amet massa vitae tortor.' +
        'Enim diam vulputate ut pharetra sit amet aliquam id diam. Eu scelerisque felis imperdiet proin fermentum leo vel' +
        'orci porta. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Sagittis vitae et leo duis ut' +
        'diam quam nulla.'
    },
    {
      event: {
        name: 'event3',
        date: 'date3',
      },
      icon: PrimeIcons.BOOK,
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' +
        'magna aliqua. Felis bibendum ut tristique et egestas quis ipsum. Odio facilisis mauris sit amet massa vitae tortor.' +
        'Enim diam vulputate ut pharetra sit amet aliquam id diam. Eu scelerisque felis imperdiet proin fermentum leo vel' +
        'orci porta. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Sagittis vitae et leo duis ut' +
        'diam quam nulla.'
    }
  ];
}

export interface TimelineEntry {
  event: {
    name: string;
    date: string;
  };
  icon: string;
  details: string;
}
