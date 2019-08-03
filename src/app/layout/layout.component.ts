import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';
import { Profile } from '../models/profile';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  private profile:Observable<Profile>;

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
        this.profile= this.globalservice.profileSubject.asObservable();
        console.log(this.profile);
      },
      error =>
      {
        this.router.navigate(['/login']);
      }
    
      
    );
  }
}
