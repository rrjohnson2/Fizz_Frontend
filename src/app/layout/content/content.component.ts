import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AlertTicket } from 'src/app/interfaces/alert-ticket';
import { Profile } from 'src/app/models/profile';
import { ContentService } from './content.service';
import { Idea } from 'src/app/models/idea';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  @Input()  profile:Profile;
  @Output() alert_ticket: EventEmitter<AlertTicket> = new EventEmitter<AlertTicket>();
            ideas:Idea[];
  constructor(private contentService:ContentService) {
   
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
    console.log(this.ideas);
  }

}
