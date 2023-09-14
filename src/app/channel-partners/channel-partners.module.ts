import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelPartnersRoutingModule } from './channel-partners-routing.module';
import { ChannelPartnersComponent } from './channel-partners/channel-partners.component';


@NgModule({
  declarations: [
    ChannelPartnersComponent
  ],
  imports: [
    CommonModule,
    ChannelPartnersRoutingModule
  ]
})
export class ChannelPartnersModule { }
