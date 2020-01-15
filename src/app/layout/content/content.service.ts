import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Preference } from 'src/app/models/preference';
import { backend_url } from 'src/app/constants/app.constants';
import { Ticket } from 'src/app/interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  all_idea_path = "getIdeas"

  constructor(private httpClient:HttpClient) { }

  getIdeas(preferences:Preference[])
  {
    return this.httpClient.post(backend_url+this.all_idea_path,preferences);
  }
}
