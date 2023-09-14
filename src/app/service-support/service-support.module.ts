import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceSupportRoutingModule } from './service-support-routing.module';
import { ServiceSupportComponent } from './service-support/service-support.component';


@NgModule({
  declarations: [
    ServiceSupportComponent
  ],
  imports: [
    CommonModule,
    ServiceSupportRoutingModule
  ]
})
export class ServiceSupportModule { }
