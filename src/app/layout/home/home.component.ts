import { Component, OnInit } from '@angular/core';
import { RealtimeService } from 'src/app/services/realtime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private realTime:RealtimeService) { }

  ngOnInit() {
  }

}
