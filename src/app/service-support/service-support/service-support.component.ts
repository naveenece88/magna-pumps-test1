import { Component, OnInit } from '@angular/core';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-service-support',
  templateUrl: './service-support.component.html',
  styleUrls: ['./service-support.component.scss']
})
export class ServiceSupportComponent implements OnInit {

  constructor(private commons: CommonsService) { 
    commons.tab = 5;
  }

  ngOnInit(): void {
  }

}
