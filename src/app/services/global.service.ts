import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateMemberTicket } from '../interfaces/create-member-ticket';
import { Ticket } from '../interfaces/ticket';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private back_url = "http://localhost:8080/";

  public username: string;

  public profile;

  constructor(private http:HttpClient) { 
    this.username= localStorage.getItem("username");
  }

  /**
   * signUp
   */
  public signUp(ticket_member:CreateMemberTicket) {
     return this.http.post(this.back_url + 'createMember', ticket_member);
  }

  public login(ticket:Ticket) {
    return this.http.post(this.back_url + 'login', ticket);
 }
  public populateMember(data)
  {
    this.username = data.data.username;
    localStorage.setItem("username",this.username);
  }
  public populateProfile(data)
  {
    this.profile = data.data;
  }
  public getProfile()
  {
    return this.http.get(this.back_url+"getProfile?username="+this.username);
  }
  



}
