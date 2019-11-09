import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Profile } from '../models/profile';
@Injectable({
  providedIn: 'root'
})
export class RealtimeService {

  constructor(private socket:Socket) {
    
   }

   joinRealTimeServer(profile:any)
   {
     this.socket.emit("join",profile);
   }

}
