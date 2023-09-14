import { Component, OnInit } from '@angular/core';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  constructor(private commons : CommonsService) {
    commons.tab = 3
   }

  ngOnInit(): void {
  }

}
