import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ticket } from 'src/app/interfaces/ticket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-navbar',
  templateUrl: './login-navbar.component.html',
  styleUrls: ['./login-navbar.component.css']
})
export class LoginNavbarComponent implements OnInit {
  private ticket: Ticket;
  public loginForm: FormGroup;
  private receipt;

constructor(private globalservice: GlobalService, private router:Router) { }

ngOnInit() {
  this.createForm();
}

private createForm()
{
  // tslint:disable-next-line: no-unused-expression
  this.loginForm = new FormGroup(
    {
      password: new FormControl(null,
        [
          Validators.required
        ]),
      username: new FormControl(null,
        [
          Validators.required
        ]),
    }
  );
}

public Login()
{
  this.setUpTicket();

  this.globalservice.login(this.ticket).subscribe(
    data =>
    {
      this.globalservice.populateMember(data);
      
      this.router.navigate(['']);
      
    },
    error =>
    {
      console.log(error.error);
    }
    
  )
}
private setUpTicket()
{
  this.ticket =
  {
    customer: this.loginForm.get("username").value,
    data: this.loginForm.get("password").value
  };
}

}
