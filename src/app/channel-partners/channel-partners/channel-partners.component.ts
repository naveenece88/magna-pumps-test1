import { Component, OnInit } from '@angular/core';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-channel-partners',
  templateUrl: './channel-partners.component.html',
  styleUrls: ['./channel-partners.component.scss']
})
export class ChannelPartnersComponent implements OnInit {

  constructor(private commons: CommonsService) { 
    commons.tab = 4;
  }

  ngOnInit(): void {
  }

}
