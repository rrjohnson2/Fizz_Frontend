import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-layout-navbar',
  templateUrl: './layout-navbar.component.html',
  styleUrls: ['./layout-navbar.component.css']
})
export class LayoutNavbarComponent implements OnInit {

  @Input() public profile:Profile;

  constructor() { }

  ngOnInit() {
  }

}
