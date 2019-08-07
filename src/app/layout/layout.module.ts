import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutNavbarComponent } from './layout-navbar/layout-navbar.component';
import { ContentComponent } from './content/content.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

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
  ]
})
export class LayoutModule { }
