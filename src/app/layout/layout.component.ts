import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';
import { Profile } from '../models/profile';
import { Observable } from 'rxjs';
import { AlertComponent } from '../shared/alerts/alert.component';
import { AlertTicket } from '../interfaces/alert-ticket';
import { RealtimeService } from '../services/realtime.service';
import { Actions } from '../constants/app.constants';
import { Notice } from '../models/notice';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  private profile:Observable<Profile>;
  private notifications:Observable<Notice[]>;
  @ViewChild(AlertComponent) alert: AlertComponent;
  @ViewChild(ContentComponent) content_comp: ContentComponent;

  constructor(
    private globalservice:GlobalService,
    private router:Router,
    private realTime:RealtimeService) { }

  ngOnInit() {
    this.setupProfile();
    this.notifications = this.realTime.noticfications.asObservable();
  }

  private setupProfile()
  {
    this.globalservice.getProfile().subscribe(
      data =>
      {
        this.globalservice.populateProfile(data);
        this.profile = this.globalservice.profileSubject.asObservable();
        this.realTime.joinRealTimeServer();
      },
      error =>
      {
        this.router.navigate(['/login']);
      }
    
      
    );
  }

  public alerty(alert_ticket:AlertTicket)
  {
    this.globalservice.notify(this.alert,alert_ticket);
  }
  public showNotice(event:Notice)
  {
    this.content_comp.showNotice(event);
  }
}
