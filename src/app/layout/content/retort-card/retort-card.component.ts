import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Retort } from 'src/app/models/retort';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RetortCardService } from './retort-card.service';
import { Ticket } from 'src/app/interfaces/ticket';
import { Message } from 'src/app/models/message';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-retort-card',
  templateUrl: './retort-card.component.html',
  styleUrls: ['./retort-card.component.css']
})
export class RetortCardComponent implements OnInit {
  @Input() idea_id:number;
  @Input() retort:Retort;
  @Input() username: string;
  @Output() messageEvent: EventEmitter<any> = new EventEmitter<any>();
  messageForm:FormGroup;
  constructor(private retortCardService:RetortCardService,private gloablService:GlobalService) { }

  ngOnInit() {
    this.createForm();
  }
  ngOnChange()
  {
    if(this.retort != null)
    {
      this.retort.messages = this.retort.messages.sort((a: any, b: any) =>
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
    }
  }
  createForm()
  {
    this.messageForm = new FormGroup(
      {
        message: new FormControl(null,
          [
            Validators.required
          ])
      });
      
  } 
  submit()
  {
    var ticket:Ticket = {
      customer:this.username,
      data: {
        retort:this.retort.id,
        comment:this.messageForm.get("message").value
      }
    }
    this.retortCardService.retort(ticket).subscribe(
      data =>{
        this.messageForm.reset();
        this.messageEvent.emit(
          {
            data:data,
            retort:this.retort
          }
        )
      }
    )
  }
 
}
