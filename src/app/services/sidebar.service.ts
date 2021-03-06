import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: '/' },
        { title: 'ProgressBar', url: '/dashboard/progress' },
        { title: 'Charths', url: '/dashboard/grafica1' },
        { title: 'promesas', url: '/dashboard/promesas'},
        { title: 'rxjs', url: '/dashboard/rxjs'}
      ]
    }
  ];

  constructor() { }

}
