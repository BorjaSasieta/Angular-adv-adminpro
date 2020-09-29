import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { MainDashboardComponent } from './main-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    ProgressComponent,
    Grafica1Component,
    MainDashboardComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    ProgressComponent,
    Grafica1Component,
    MainDashboardComponent,
    DashboardComponent
  ]
})
export class PagesModule { }