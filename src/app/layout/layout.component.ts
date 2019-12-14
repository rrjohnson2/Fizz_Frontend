import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';
import { Profile } from '../models/profile';
import { Observable } from 'rxjs';
import { NoticeComponent } from '../shared/notice/notice.component';
import { NotifyTicket } from '../interfaces/notify-ticket';
import { RealtimeService } from '../services/realtime.service';
import { Actions } from '../constants/app.constants';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  private profile:Observable<Profile>;
  @ViewChild(NoticeComponent) notice: NoticeComponent;

  constructor(private globalservice:GlobalService,private router:Router,private realTime:RealtimeService) { }

  ngOnInit() {
    this.setupProfile();
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

  public notify(notify_ticket:NotifyTicket)
  {
    this.globalservice.notify(this.notice,notify_ticket);
  }
}
