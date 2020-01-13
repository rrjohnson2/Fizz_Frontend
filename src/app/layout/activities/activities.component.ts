import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertTicket } from 'src/app/interfaces/alert-ticket';
import { Profile } from 'src/app/models/profile';
import { ActivitiesService } from './activities.service';
import { Ticket } from 'src/app/interfaces/ticket';
import { ShareIdeaData } from 'src/app/interfaces/shareIdeaData';
import { ThrowStmt } from '@angular/compiler';
import { Focus } from 'src/app/models/focus';
import { error } from 'util';
import { GlobalService } from 'src/app/services/global.service';
import { Actions } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  
  ideaForm:FormGroup;
  ideaFormSelection:number = 0
  focuses = []

  @Output() alert_ticket: EventEmitter<AlertTicket> = new EventEmitter<AlertTicket>();
  @Input() public profile:Profile;


  constructor(private uiService:UIService,private activitiesService:ActivitiesService , private formBuilder:FormBuilder, private globalService:GlobalService) {
    
   }

  ngOnInit() {
    this.activitiesService.getFocuses().subscribe(
      (data) =>
      {
        var arry = [];
        arry = data;
        for(var i=0; i<arry.length;i++)
        {
          this.focuses .push(
            {
              name: arry[i]
            }
          )
        }
        this.createForm();
      }
      
    );
  }
   
  private createForm()
  {
    this.ideaForm = new FormGroup(
      {
        title: new FormControl(null,
          [
            Validators.required
          ]), 
          description: new FormControl(null,
            [
              Validators.required
            ]),
          categories: this.renderCategories(this.focuses)
      }
    );
  }

  shareIdea()
  {
    var focuses:Focus[] = this.populateCategories();
    // build focus fom checkboxes
    var shareIdeaData:ShareIdeaData={
      title: this.ideaForm.get("title").value,
      description: this.ideaForm.get("description").value,
      focus: focuses
    }
    var shareIdeaTicket:Ticket ={
      customer:this.profile.username,
      data: shareIdeaData
    };
    this.activitiesService.shareIdea(shareIdeaTicket).subscribe(
      data =>
      {
        var message:any = data;
        this.alert_ticket.emit({
          msg: message.data.message.toString(),
          action_attempted: Actions.shareIdea,
          type: "success"
        })
      },
      error =>{
        this.alert_ticket.emit({
          msg:error.error.message,
          action_attempted: Actions.shareIdea,
          type: "danger"
        })
      }
    );
  }
  populateCategories(): Focus[] {
    var temp:Focus[] =[]
    var controls=[]
    controls = this.categories.value;
    for (var i =0; i< controls.length; i++ ) {
      if (controls[i].value==true) {
          temp.push(new Focus(this.focuses[i].name,null));
      }
    }

    return temp;
  }

  open(content, type, modalDimension)
  {
    this.uiService.open(content, type, modalDimension);
  }

  nextInput(next:boolean)
  {
    switch (next) {
      case true:
        this.ideaFormSelection++;
        break;
      case false:
          this.ideaFormSelection--;
        break;
    }
     
  }
  private renderCategories(categories)
  { 
    const arry = categories.map(
      category =>
      {
        return this.formBuilder.control(null);
      }
    );
    return this.formBuilder.control(arry);
  }
  get categories() {
    return this.ideaForm.get('categories');
  };

}

