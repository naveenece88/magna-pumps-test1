import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelPartnersComponent } from './channel-partners/channel-partners.component';

const routes: Routes = [{
  path: '', component: ChannelPartnersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelPartnersRoutingModule { }
