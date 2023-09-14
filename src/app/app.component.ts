import { Component, Inject } from '@angular/core';
import { CommonsService } from './services/commons.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'magna-pumps';

  constructor(public commons: CommonsService, public router: Router, private titleService: Title,
    private metaService: Meta, private activatedRoute: ActivatedRoute, @Inject(DOCUMENT) private dom: any) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          var rt = this.getChild(this.activatedRoute)
          rt.data.subscribe((data: any) => {
            console.log(data);
            if (data.title) {
              this.titleService.setTitle(data.title)

            } else {
              this.titleService.setTitle('Buy Best Industrial Pumps Online in India | MagnaPumps')

            }
            // if (data.description) {
            //   this.metaService.updateTag({ name: 'description', content: data.description })
            // } else {
            //   this.metaService.updateTag({ name: 'description', content: 'Shop the best Indian grocery online at Magna Stores, your top destination for online grocery shopping in Singapore. Discover a wide range of products and enjoy the convenience of shopping from home' })
            // }

            this.updateCanonicalUrl(event.url);
          })
        }


      })
  }

  getChild(activatedRoute: ActivatedRoute):any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

  updateCanonicalUrl(url: string) {
    let hostname = 'https://magnapumps.com'
    const head = this.dom.getElementsByTagName('head')[0];
    var element: HTMLLinkElement = this.dom.querySelector(`link[rel='canonical']`) || null
    if (element == null) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel', 'canonical')
    element.setAttribute('href', hostname + url)
  }

}
