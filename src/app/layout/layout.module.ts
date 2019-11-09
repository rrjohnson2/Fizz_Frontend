import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutNavbarComponent } from './layout-navbar/layout-navbar.component';
import { ContentComponent } from './home/content/content.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RealtimeService } from '../services/realtime.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    LayoutNavbarComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    SocketIoModule.forRoot(config)
  ],
  providers:[RealtimeService]
})
export class LayoutModule { }
