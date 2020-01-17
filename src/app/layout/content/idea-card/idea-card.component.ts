import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { Idea } from 'src/app/models/idea';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from 'src/app/models/message';
import { IdeaCardService } from './idea-card.service';
import { Ticket } from 'src/app/interfaces/ticket';
import { Notice, Notice_Actions } from 'src/app/models/notice';
import { RetortCardComponent } from '../retort-card/retort-card.component';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.css']
})
export class IdeaCardComponent implements OnInit {

  @Input() idea:Idea;
  @Input() username:string;
  @ViewChildren(RetortCardComponent) retort_cards:QueryList<RetortCardComponent>;
  today:Date = new Date();
  retortForm:FormGroup
  constructor(private idea_card_service:IdeaCardService, private uiService:UIService) { }

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
            this.retortForm.reset();
            this.addRetortToIdea(data);
          }
        
      )
     
  }
  addRetortToIdea(data: any) {
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

  showNotice(event:Notice) {
    if(event.action == Notice_Actions.RETORT)
    {
      return this.showRetort(event.data);
    }
    
    return this.retort_cards.find((item: RetortCardComponent, index: number, array: RetortCardComponent[]) => 
    item.retort.id ==event.retort_id).showNotice(event);
  }
  showRetort(data: any) {
    throw new Error("Method not implemented.");
  }

  vote(vote_type)
  {
    console.log("here")
    var ticket:Ticket = {
      customer: this.username,
      data:{
        idea:this.idea.id,
        vote:vote_type
      }
    }
    this.idea_card_service.vote(ticket).subscribe(
      data =>{
        this.addRating(data);
      }
    );
  }
  addRating(data: any) {
    console.log(this.idea)
    this.idea.ratings.push(data.data);
  }

  get sortedRetorts()
  {
   return  this.idea.retorts.sort((val1, val2)=> 
      {return new Date(val1.timestamp).getTime() - new Date(val2.timestamp).getTime()});
  }

}