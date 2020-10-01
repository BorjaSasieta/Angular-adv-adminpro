import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { MainDashboardComponent } from './main-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';


@NgModule({
  declarations: [
    ProgressComponent,
    Grafica1Component,
    MainDashboardComponent,
    DashboardComponent,
    AcountSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule
  ],
  exports: [
    ProgressComponent,
    Grafica1Component,
    MainDashboardComponent,
    DashboardComponent,
    AcountSettingsComponent
  ]
})
export class PagesModule { }
