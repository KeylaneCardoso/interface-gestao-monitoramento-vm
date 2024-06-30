import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing';
import { HeaderComponent } from '../../components/header/header.component';
// import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    // HeaderComponent,
    DashboardRoutingModule
  ],
  providers: [],
  bootstrap: [DashboardComponent],
  exports: [
    DashboardComponent
  ]

})
export class DashboardModule { }