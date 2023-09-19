import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public items = [
    {
      label:'Dashboard',
      icon:'pi pi-fw pi-th-large',
      routerLink:"/"
    },
    {
      label:'Terms Engine',
      icon:'pi pi-fw pi-list',
      routerLink:"/terms"
    },
    {
      label:'CR Plan',
      icon:'pi pi-fw pi-sitemap',
      routerLink:"/cr-plan"
    },
    {
      label:'Events',
      icon:'pi pi-fw pi-calendar',
      routerLink:"/events"
    },
    {
      label:'Daily',
      icon:'pi pi-fw pi-users',
      routerLink:"/daily"
    },
    {
      label:'Errors Portal',
      icon:'pi pi-exclamation-circle',
      routerLink:"/error-portal"
    }
  ];

  constructor() { }
}
