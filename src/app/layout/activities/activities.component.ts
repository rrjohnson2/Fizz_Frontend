import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotifyTicket } from 'src/app/interfaces/notify-ticket';
import { Profile } from 'src/app/models/profile';
import { ActivitiesService } from './activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  
  ideaForm:FormGroup;
  ideaFormSelection:number = 0
  categories:string[] = []

  @Output() notify_ticket: EventEmitter<NotifyTicket> = new EventEmitter<NotifyTicket>();
  @Input() public profile:Profile;


  constructor(private uiService:UIService,private activitiesService:ActivitiesService) {
    
   }

  ngOnInit() {
    this.createForm();
    this.activitiesService.getFocuses().subscribe(
      (data) =>
      {
        this.categories=data
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
          categories: new FormControl(null,
            [
              Validators.required
            ]), 
      }
    );
  }

  shareIdea()
  {

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

}

