import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutNavbarComponent } from './layout-navbar/layout-navbar.component';
import { ContentComponent } from './content/content.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    LayoutNavbarComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbDropdownModule
  ]
})
export class LayoutModule { }
