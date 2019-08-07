import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticeComponent } from '../shared/notice/notice.component';
import { GlobalService } from '../services/global.service';
import { NotifyTicket } from '../interfaces/notify-ticket';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild(NoticeComponent) notice: NoticeComponent;

  constructor(private globalService:GlobalService) { }

  ngOnInit() {
  }
  
  public notify(notify_ticket:NotifyTicket)
  {
    this.globalService.notify(this.notice,notify_ticket);
  }

}
