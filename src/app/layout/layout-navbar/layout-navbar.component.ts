import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { NgbDropdown, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ticket } from 'src/app/interfaces/ticket';
import { NotifyTicket } from 'src/app/interfaces/notify-ticket';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-layout-navbar',
  templateUrl: './layout-navbar.component.html',
  styleUrls: ['./layout-navbar.component.css']
})
export class LayoutNavbarComponent implements OnInit {

  @Input() public profile:Profile;
  @Output() notify_ticket: EventEmitter<NotifyTicket> = new EventEmitter<NotifyTicket>();

  autoCloseBool=false;
  closeResult: string;
  updateForm:FormGroup;
  updateTicket:Ticket;


  ngOnInit() {
    this.createForm();
  }
    constructor(private globalService:GlobalService,private router:Router,private uiService:UIService)
    {

    }
  private createForm()
  {
    // tslint:disable-next-line: no-unused-expression
    this.updateForm = new FormGroup(
      {
        firstname: new FormControl(null,
          [
            
          ]),
        lastname: new FormControl(null,
          [
            
          ]),
        email: new FormControl(null,
          [
            
          ]),
        password: new FormControl(null,
          [
            
          ]),
        username: new FormControl(null,
          [

          ]),
        old_password: new FormControl(null,
        [
          Validators.required
        ]),

      }
    );
  }
  public toggleDropDown(myDrop:NgbDropdown)
  {
    myDrop.toggle();
  }

 

  public logoff(){
    localStorage.clear() ;
    this.globalService.username=null;
    this.router.navigate(['/login']);
  }

  open(content, type, modalDimension) {
    this.uiService.open(content,type,modalDimension);
}
 


public update()
{
  
  if(!this.globalService.validateForm(this.updateForm,this.notify_ticket))
    {
      
      return
    }

  this.updateTicket =
  {
      customer: this.profile.username,
      data: {
        old_password: this.updateForm.get("old_password").value,
        member: {
          username: this.updateForm.get("username").value,
          email: this.updateForm.get("email").value,
          firstName: this.updateForm.get("firstname").value,
          lastName: this.updateForm.get("lastname").value,
          password: this.updateForm.get("password").value,
        }
      }
  }
    this.globalService.updateProfile(this.updateTicket).subscribe(
      data =>
      {
          this.globalService.populateProfile(data);
          this.updateForm.reset();
      },
      error =>{
        this.notify_ticket.emit({
          msg:error.error.message,
          type:"danger"
        })
      }
    )

}

}
