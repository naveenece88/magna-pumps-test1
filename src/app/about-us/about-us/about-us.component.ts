import { Component, OnInit } from '@angular/core';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private commons:CommonsService) {
    commons.tab = 1;
   }

  ngOnInit(): void {
  }

}
