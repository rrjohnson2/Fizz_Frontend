import { Component, OnInit, EventEmitter, Output, Input, ElementRef } from '@angular/core';
import { AlertTicket } from 'src/app/interfaces/alert-ticket';
import { Profile } from 'src/app/models/profile';
import { ContentService } from './content.service';
import { Idea } from 'src/app/models/idea';
import { Notice, Notice_Actions } from 'src/app/models/notice';
import { Actions } from 'src/app/constants/app.constants';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  @Input()  profile:Profile;
  @Output() alert_ticket: EventEmitter<AlertTicket> = new EventEmitter<AlertTicket>();
            ideas:Idea[];
  constructor(private contentService:ContentService,private uiService:UIService) {
   
   }

  ngOnInit() {
   
  }
  ngOnChanges()
  {
    if(this.profile != null)
    {
      
      this.contentService.getIdeas(this.profile.preferences).subscribe(
        data =>{
          this.populate_ideas(data);
        }
      );
    }
  }
  populate_ideas(data) {
    this.ideas = data.data
  }

  showNotice(event: Notice) {
    console.log(Notice_Actions.FOCUS);
    if(event.action == Notice_Actions.FOCUS)
    {
      return this.showIdea(event.data);
    }
  }
  showIdea(data:Idea) {
    
    
    if(this.ideas.find( idea => idea.id==data.id) == undefined)
    {
      this.ideas.push(data);
    }
    return this.bringInView(data)
  }
  bringInView(data: Idea) {
    const el: HTMLElement|null = document.getElementById(`${data.id}`);
    const parent: HTMLElement|null = document.getElementById(`ideas_body`);
    var pos = 0
    if(el !=null) pos =el.offsetTop;
    parent.scroll({
      top: pos,
      left: 0,
      behavior: 'smooth'
    })
  }

  get Ideas()
  {
    return  this.ideas.sort((val1, val2)=> 
    {return new Date(val2.timestamp).getTime() - new Date(val1.timestamp).getTime()});
  }

}
