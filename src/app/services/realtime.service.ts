import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class RealtimeService {

  constructor(private socket:Socket) {
    console.log("here");
    
   }
   something()
   {
     console.log("something")
   }
}
