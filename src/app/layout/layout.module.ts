import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutNavbarComponent } from './layout-navbar/layout-navbar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    LayoutNavbarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
