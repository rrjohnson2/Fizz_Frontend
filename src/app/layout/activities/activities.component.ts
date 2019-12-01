import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  closeResult: string;
  constructor(private uiService:UIService) { }

  ngOnInit() {
  }


  open(content, type, modalDimension)
  {
    this.uiService.open(content, type, modalDimension);
  }

}
