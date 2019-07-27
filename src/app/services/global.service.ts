import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateMemberTicket } from '../interfaces/create-member-ticket';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private back_url = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  /**
   * signUp
   */
  public signUp(ticket_member:CreateMemberTicket) {
     return this.http.post(this.back_url + 'createMember', ticket_member);
  }


}
