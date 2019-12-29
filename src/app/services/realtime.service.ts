import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class RealtimeService {

  constructor(private socket:Socket) {
    
    this.socket.on("notice",(data)=>{
      console.log(data);
    });
   }

   joinRealTimeServer()
   {
     this.socket.emit("join",localStorage.getItem("username"));
   }

}
