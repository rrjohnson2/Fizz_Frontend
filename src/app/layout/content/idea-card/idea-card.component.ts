import { Component, OnInit, Input } from '@angular/core';
import { Idea } from 'src/app/models/idea';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from 'src/app/models/message';
import { IdeaCardService } from './idea-card.service';
import { Ticket } from 'src/app/interfaces/ticket';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.css']
})
export class IdeaCardComponent implements OnInit {
  @Input() idea:Idea;
  @Input() username:string;
  today:Date = new Date();
  retortForm:FormGroup
  constructor(private idea_card_service:IdeaCardService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm()
  {
    this.retortForm = new FormGroup(
      {
        retort: new FormControl(null,
          [
            Validators.required
          ])
      }
    )
      
  } 
  submit()
  {
      var ticket:Ticket={
        customer:this.username,
        data:{
          idea:this.idea.id,
          retort:this.retortForm.get("retort").value
        }
      }
      this.idea_card_service.retort(ticket).subscribe(
        
          (data) =>
          {
            console.log("working up to here");
            this.retortForm.reset();
            this.addRetortToIdea(data);
          }
        
      )
     
  }
  addRetortToIdea(data: any) {
    console.log(data)
    this.idea.retorts.push(data.data)
  }

  messageEvent(event)
  {
    for (const key in this.idea.retorts) {
      if(this.idea.retorts[key].id == event.retort.id)
      {
        this.idea.retorts[key].messages.push(event.data.data);
      }
    }

  }

  get sortedRetorts()
  {
   return  this.idea.retorts.sort((val1, val2)=> 
      {return new Date(val1.timestamp).getTime() - new Date(val2.timestamp).getTime()});
  }

}