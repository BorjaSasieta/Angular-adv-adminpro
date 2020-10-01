import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private theme = document.querySelector('#theme');

  constructor() {
    const themeUrl = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.theme.setAttribute('href', themeUrl);
  }

  changeTheme(newTheme: string): void {
    const url = `./assets/css/colors/${newTheme}.css`;
    this.theme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.chechkCurrentTheme();
  }

  chechkCurrentTheme(): void {
    const link: NodeListOf<Element> = document.querySelectorAll('.selector');
    link.forEach( elem => {
      elem.classList.remove('working');
      const btn = elem.getAttribute('data-theme');
      const urlTheme = `./assets/css/colors/${btn}.css`;
      const currentTheme = this.theme.getAttribute('href');
      if (urlTheme === currentTheme) {
        elem.classList.add('working');
      }
    });
  }
}
