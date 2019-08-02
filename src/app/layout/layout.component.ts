import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private globalservice:GlobalService,private router:Router) { }

  ngOnInit() {
    this.setupProfile();
  }

  private setupProfile()
  {
    this.globalservice.getProfile().subscribe(
      data =>
      {
        this.globalservice.populateProfile(data);
        console.log(this.globalservice.profile);
      },
      error =>
      {
        this.router.navigate(['/login']);
      }
    
      
    );
  }
}
