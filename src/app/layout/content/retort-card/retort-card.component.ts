import { Component, OnInit, Input } from '@angular/core';
import { Retort } from 'src/app/models/retort';

@Component({
  selector: 'app-retort-card',
  templateUrl: './retort-card.component.html',
  styleUrls: ['./retort-card.component.css']
})
export class RetortCardComponent implements OnInit {
  @Input() idea_id:number;
  @Input() retort:Retort;
  constructor() { }

  ngOnInit() {
  }

}
