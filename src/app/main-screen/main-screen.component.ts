import { Component, OnInit } from '@angular/core';
import { CommonsService } from '../services/commons.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  constructor(private commons : CommonsService) { 
    commons.tab = 0;
  }

  ngOnInit(): void {
  }

}
