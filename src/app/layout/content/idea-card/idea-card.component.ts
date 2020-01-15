import { Component, OnInit, Input } from '@angular/core';
import { Idea } from 'src/app/models/idea';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.css']
})
export class IdeaCardComponent implements OnInit {
  @Input() idea:Idea;
  today:Date = new Date();
  constructor() { }

  ngOnInit() {
  
  }
  get time_since()
  {
    return "16hrs"
  }

}