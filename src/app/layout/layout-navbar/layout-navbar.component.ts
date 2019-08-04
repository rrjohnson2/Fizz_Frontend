import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { NgbDropdown, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-layout-navbar',
  templateUrl: './layout-navbar.component.html',
  styleUrls: ['./layout-navbar.component.css']
})
export class LayoutNavbarComponent implements OnInit {

  @Input() public profile:Profile;
  autoCloseBool=false;
  closeResult: string;

  constructor(private router:Router, private globalService:GlobalService, private modalService: NgbModal) { }

  ngOnInit() {
  }
  public toggleDropDown(myDrop:NgbDropdown)
  {
    myDrop.toggle();
  }

  public profileModal(){
    console.log("here")
  }

  public logoff(){
    localStorage.clear() ;
    this.globalService.username=null;
    this.router.navigate(['/login']);
  }

  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
        this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
        this.modalService.open(content,{ centered: true }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
  } else {
      return  `with: ${reason}`;
  }
}

}
