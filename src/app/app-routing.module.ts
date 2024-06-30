import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListingVmComponent } from './pages/listing-vm/listing-vm.component';
import { RegisterVmComponent } from './pages/register-vm/register-vm.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "home",
    component: DashboardComponent
  },
  {
    path: "visualizarVM",
    component: ListingVmComponent
  },
  {
    path: "cadastrarVM",
    component: RegisterVmComponent
  },
  {
    path: "header",
    component: HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
