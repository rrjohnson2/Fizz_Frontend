import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing.module';
import { LayoutNavbarComponent } from './layout-navbar/layout-navbar.component';
import { ContentComponent } from './content/content.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RealtimeService } from '../services/realtime.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivitiesService } from './activities/activities.service';
import { ContentService } from './content/content.service';
import { IdeaCardComponent } from './content/idea-card/idea-card.component';
import { RetortCardComponent } from './content/retort-card/retort-card.component';
import { MessageCardComponent } from './content/message-card/message-card.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutNavbarComponent,
    ContentComponent,
    ActivitiesComponent,
    IdeaCardComponent,
    RetortCardComponent,
    MessageCardComponent
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
  providers:[RealtimeService,ActivitiesService,ContentService]
})
export class LayoutModule { }
