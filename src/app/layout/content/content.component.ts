import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AlertTicket } from 'src/app/interfaces/alert-ticket';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Output() alert_ticket: EventEmitter<AlertTicket> = new EventEmitter<AlertTicket>();
  @Input() public profile:Profile;
  constructor() { }

  ngOnInit() {
  }

}
