import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  currentProduct = this.commons.productList[0];
  constructor(public commons: CommonsService, private route: ActivatedRoute) {
    commons.tab = 2;

    this.route.params.subscribe(params => {
      this.commons.productList.forEach((product:any) => {
        if(product.Type_Url == params['type'] && product.Products_Url == params['name']){
          this.currentProduct = product;
        }
      });
    });
  }

  ngOnInit(): void {
  }

}
