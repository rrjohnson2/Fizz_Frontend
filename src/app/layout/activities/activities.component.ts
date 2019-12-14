import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotifyTicket } from 'src/app/interfaces/notify-ticket';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  
  ideaForm:FormGroup;
  ideaFormSelection:ideaFormDirection = ideaFormDirection.Title; 
  ideaFormSelectionBehavoirSubject:BehaviorSubject<ideaFormDirection>= new BehaviorSubject<ideaFormDirection>(this.ideaFormSelection);
  ideaFormSelectionObservable:Observable<ideaFormDirection>;
  @Output() notify_ticket: EventEmitter<NotifyTicket> = new EventEmitter<NotifyTicket>();
  @Input() public profile:Profile;


  constructor(private uiService:UIService) {
   }

  ngOnInit() {
    this.createForm();
    this.ideaFormSelectionBehavoirSubject.next(this.ideaFormSelection);
    this.ideaFormSelectionObservable = this.ideaFormSelectionBehavoirSubject.asObservable();
  }
   
  private createForm()
  {
    // tslint:disable-next-line: no-unused-expression
    this.ideaForm = new FormGroup(
      {
        title: new FormControl(null,
          [
            Validators.required
          ])
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
        this.ideaFormSelectionBehavoirSubject.next(this.ideaFormSelection);
        break;
      case false:
          this.ideaFormSelection--;
          this.ideaFormSelectionBehavoirSubject.next(this.ideaFormSelection);
        break;
    }
    
  }

  showInput(){

  }

}
enum ideaFormDirection {
   Title,
   Descrption,
   Focuses
  }
