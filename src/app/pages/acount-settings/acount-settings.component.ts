import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styles: [
  ]
})
export class AcountSettingsComponent implements OnInit {

  constructor(private settingsS: SettingsService) { }

  ngOnInit(): void {
    this.settingsS.chechkCurrentTheme();
  }

  changeTheme(theme: string): void {
    this.settingsS.changeTheme(theme);
  }

}
