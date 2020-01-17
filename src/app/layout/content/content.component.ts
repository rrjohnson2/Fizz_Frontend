import { Component, OnInit, EventEmitter, Output, Input, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { AlertTicket } from 'src/app/interfaces/alert-ticket';
import { Profile } from 'src/app/models/profile';
import { ContentService } from './content.service';
import { Idea } from 'src/app/models/idea';
import { Notice, Notice_Actions } from 'src/app/models/notice';
import { UIService } from 'src/app/services/ui.service';
import { IdeaCardComponent } from './idea-card/idea-card.component';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  @Input()  profile:Profile;
  @Output() alert_ticket: EventEmitter<AlertTicket> = new EventEmitter<AlertTicket>();
            ideas:Idea[];
  @ViewChildren(IdeaCardComponent) idea_cards:QueryList<IdeaCardComponent>;
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
    if(event.action == Notice_Actions.FOCUS)
    {
      return this.showIdea(event.data);
    }
    
    return this.idea_cards.find((item: IdeaCardComponent, index: number, array: IdeaCardComponent[]) => 
    item.idea.id ==event.idea_id).showNotice(event);
  }
  showIdea(data:Idea) {
    
    
    if(this.ideas.find( idea => idea.id==data.id) == undefined)
    {
      this.ideas.push(data);
    }
    return this.uiService.bringInView(data,`ideas_body`)
  }
  

  get Ideas()
  {
    return  this.ideas.sort((val1, val2)=> 
    {return new Date(val2.timestamp).getTime() - new Date(val1.timestamp).getTime()});
  }

}
