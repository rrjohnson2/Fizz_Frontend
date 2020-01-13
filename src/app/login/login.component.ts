import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertComponent } from '../shared/alerts/alert.component';
import { GlobalService } from '../services/global.service';
import { AlertTicket } from '../interfaces/alert-ticket';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild(AlertComponent) notice: AlertComponent;

  constructor(private globalService:GlobalService) { }

  ngOnInit() {
  }
  
  public notify(alert_ticket:AlertTicket)
  {
    this.globalService.notify(this.notice,alert_ticket);
  }

}
