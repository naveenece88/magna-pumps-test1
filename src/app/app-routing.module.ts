import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [{
  path: '', component: MainScreenComponent

}, {
  path: 'home', component: MainScreenComponent
}, {
  path: 'about-us', loadChildren: ()=> import('./about-us/about-us.module').then(m => m.AboutUsModule), data : {
    title : 'About US | MagnaPumps',
    // description : 'Shop the best Indian grocery online at Magna Stores, your top destination for online grocery shopping in Singapore. Discover a wide range of products and enjoy the convenience of shopping from home.'
  }
}, {
  path: 'products', loadChildren: ()=> import('./products/products.module').then(m => m.ProductsModule), data : {
    title : 'Buy Pump Products Online in India | MagnaPumps',
    // description : 'Shop the best Indian grocery online at Magna Stores, your top destination for online grocery shopping in Singapore. Discover a wide range of products and enjoy the convenience of shopping from home.'
  }
}, {
  path: 'applications', loadChildren: ()=> import('./applications/applications.module').then(m => m.ApplicationsModule), data : {
    title : 'Industrial Applications  | MagnaPumps',
    // description : 'Shop the best Indian grocery online at Magna Stores, your top destination for online grocery shopping in Singapore. Discover a wide range of products and enjoy the convenience of shopping from home.'
  }
}, {
  path: 'channel-partners', loadChildren: ()=> import('./channel-partners/channel-partners.module').then(m => m.ChannelPartnersModule), data : {
    title : 'Channel Partners | MagnaPumps',
    // description : 'Shop the best Indian grocery online at Magna Stores, your top destination for online grocery shopping in Singapore. Discover a wide range of products and enjoy the convenience of shopping from home.'
  }
}, {
  path: 'contact-us', loadChildren: ()=> import('./contact-us/contact-us.module').then(m => m.ContactUsModule), data : {
    title : 'Contact Us to know more about our Products and Services | MagnaPumps',
    // description : 'Shop the best Indian grocery online at Magna Stores, your top destination for online grocery shopping in Singapore. Discover a wide range of products and enjoy the convenience of shopping from home.'
  }
}, {
  path: 'service-and-support', loadChildren: ()=> import('./service-support/service-support.module').then(m => m.ServiceSupportModule), data : {
    title : 'Get Our Service and Support 24/7 | MagnaPumps',
    // description : 'Shop the best Indian grocery online at Magna Stores, your top destination for online grocery shopping in Singapore. Discover a wide range of products and enjoy the convenience of shopping from home.'
  }
},{ path: '**', pathMatch: 'full', component: PagenotfoundComponent 
}];


@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
