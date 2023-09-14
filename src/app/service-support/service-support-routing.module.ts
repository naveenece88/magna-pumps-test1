import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceSupportComponent } from './service-support/service-support.component';

const routes: Routes = [{
  path: '', component: ServiceSupportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceSupportRoutingModule { }
