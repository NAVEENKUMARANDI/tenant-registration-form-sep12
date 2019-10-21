import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tenant-registration-form';

  navLinks = [
    {
      path: '/family',
      label: 'Family Member'
    },

    {
      path: '/register',
      label: 'Register Form'
    },

    {
      path: '/flatownerdetail',
      label: 'FlatOwner Detail'
    }
  ];
}
