import { Component, OnInit, Input } from '@angular/core';
import { NotifyTicket } from 'src/app/interfaces/notify-ticket';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  @Input()
  public alerts: Array<IAlert> = [];
  private backup: Array<IAlert>;
  private types =
  {
      success:{
       icon: 'ni ni-like-2',
       strong: 'Success!',
      },
      danger:{
        icon: 'ni ni-support-16',
        strong: 'Danger!',
       },
       info:{
        icon: 'ni ni-bell-55',
        strong: 'Info!',
       },
       warning:{
        icon: 'ni ni-bell-55',
        strong: 'Warning!',
       }

  }
  private count = 0;
  private popup =5000;

  ngOnInit(): void {
  }

  constructor() {
      
  }

  close(alert: IAlert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  public add(notify_ticket:NotifyTicket)
  {
      var type:Type ;
      switch (notify_ticket.type) {
        case "success":
            type= this.types.success
          break;
        case "info":
          type= this.types.info
        break;
        case "warning":
          type= this.types.warning
        break;
        case "danger":
          type= this.types.danger
        break;
      
        default:
          break;
      }
      
      var alert:IAlert = {
        id: this.count,
        message:notify_ticket.msg,
        strong:type.strong,
        icon:type.icon,
        type:notify_ticket.type
      };
      this.alerts.push(alert);
      setTimeout(
        ()=>
        {
          this.close(alert);
        },
        this.popup
      );
  }
  
}

export interface IAlert {
  id: number;
  type: string;
  strong?: string;
  message: string;
  icon?: string;
}

export interface Type {
  strong?: string;
  icon?: string;
}