import { Component, OnInit, Input } from '@angular/core';
import { Idea } from 'src/app/models/idea';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from 'src/app/models/message';

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
  constructor() { }

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

  get time_since()
  {
    return "16hrs"
  }

}