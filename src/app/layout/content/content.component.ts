import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NotifyTicket } from 'src/app/interfaces/notify-ticket';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Output() notify_ticket: EventEmitter<NotifyTicket> = new EventEmitter<NotifyTicket>();
  @Input() public profile:Profile;
  constructor() { }

  ngOnInit() {
  }

}
