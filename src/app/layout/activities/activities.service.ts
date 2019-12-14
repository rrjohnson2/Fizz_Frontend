import { Injectable } from '@angular/core';
import { backend_url } from 'src/app/constants/app.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor( private httpClient:HttpClient) { }

  getFocuses():Observable<any>
  {
    return this.httpClient.get(backend_url + "getCategories");
  }
}
