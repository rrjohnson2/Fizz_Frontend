import { Component, OnInit, EventEmitter, Output, Input, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { AlertTicket } from 'src/app/interfaces/alert-ticket';
import { Profile } from 'src/app/models/profile';
import { ContentService } from './content.service';
import { Idea } from 'src/app/models/idea';
import { Notice, Notice_Actions } from 'src/app/models/notice';
import { UIService } from 'src/app/services/ui.service';
import { IdeaCardComponent } from './idea-card/idea-card.component';
import { Observable, BehaviorSubject } from 'rxjs';
import { Retort } from 'src/app/models/retort';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  
  @Input()  profile:Profile;
  @Output() alert_ticket: EventEmitter<AlertTicket> = new EventEmitter<AlertTicket>();
            ideas:Idea[];
            ideas_behav:BehaviorSubject<Idea[]> = new BehaviorSubject<Idea[]>(this.ideas);
            ideas_obs:Observable<Idea[]>
  @ViewChildren(IdeaCardComponent) idea_cards:QueryList<IdeaCardComponent>;
  constructor(private contentService:ContentService,private uiService:UIService) {
   
   }

  ngOnInit() {
   this.ideas_obs = this.ideas_behav.asObservable();
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
    this.ideas_behav.next(this.ideas);
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
    
    return this.uiService.bringInView(data.id,`ideas_body`);
  }
  updateOrAdd(data: Notice[]) {
    
    // tslint:disable-next-line: forin
    for(const key in data)
    {
      var notice:Notice = data[key];
      if(!notice.checked)
      {
        
        if(notice.action == Notice_Actions.FOCUS)
        {
          // tslint:disable-next-line: triple-equals
          if(this.ideas != undefined && this.ideas.find( idea => idea.id==notice.data.id) == undefined && notice.action == Notice_Actions.FOCUS)
          {
          
            this.ideas.push(notice.data);
          }
        } else{
          var idea :Idea = this.ideas.find( idea => idea.id == notice.idea_id);

          if(notice.action == Notice_Actions.RETORT){
            var retort = idea.retorts.find(ret => ret.id == notice.data.id);
            if(retort == undefined) idea.retorts.push(notice.data);
          }
          else if (notice.action === Notice_Actions.RATING)
          { 
            var rate = idea.ratings.find(rate => rate.id == notice.data.id);
            if(rate == undefined) idea.ratings.push(notice.data);
            else rate.vote = notice.data.vote;
          }
          else if (notice.action === Notice_Actions.COMMENT)
          { 
            var retort = idea.retorts.find(ret => ret.id == notice.retort_id);
            var message = retort.messages.find( msg => msg.id == notice.data.id)
            if(message == undefined) retort.messages.push(notice.data);
            else message.content = notice.data.content;
          }
        }
          
         notice.checked = true;
      }
    }
  }
  
  get Ideas()
  {
    return  this.ideas_obs;
  }

}
