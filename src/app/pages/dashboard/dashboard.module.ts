import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing';

@NgModule({
  declarations: [
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    // DashboardRoutingModule
  ],
  providers: [],
  exports: [
    // DashboardComponent
  ]

})
export class DashboardModule { }