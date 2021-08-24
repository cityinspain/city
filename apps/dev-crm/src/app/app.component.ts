import { Component } from '@angular/core';
import { SidenavConfig } from 'libs/ui/src/lib/sidenav/sidenav.model';

@Component({
  selector: 'city-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dev-crm';

  open = true;

  sidenavConfig: SidenavConfig = {
    items: [
      {
        label: 'Home',
        path: '/home',
      },
      { label: 'Schedule', path: '/schedule' },
      { label: 'Projects', children: [{ label: 'Ideas', path: '/ideas' }] },
      {
        label: 'Jobs',
        children: [{ label: 'Recruiters', path: '/recruiters' }],
      },
      {
        label: 'Connections',
        path: '/connections',
      },
    ],
  };
}
