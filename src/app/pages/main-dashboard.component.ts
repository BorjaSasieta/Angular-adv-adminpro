import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFuncitions();

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styles: [
  ]
})
export class MainDashboardComponent implements OnInit {

  constructor(private setService: SettingsService) { }

  ngOnInit(): void {
    customInitFuncitions();
  }

}
