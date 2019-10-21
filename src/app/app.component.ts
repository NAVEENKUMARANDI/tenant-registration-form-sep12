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
      path: '/flatownerdetail',
      label: 'FlatOwner Detail'
    },
    
    {
      path: '/register',
      label: 'Tenant Register Form'
    },

    {
      path: '/flatdetail',
      label: 'Flat Full Detail'
    },
    {
      path: '/ebmeterdetail',
      label: 'EB Meter Details'
    },

    {
      path: '/family',
      label: 'Family Member'
    },
  ];
}