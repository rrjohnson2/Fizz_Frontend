import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './creative_tim/home/home.component';
import { ProfileComponent } from './creative_tim/profile/profile.component';
import { SignupComponent } from './creative_tim/signup/signup.component';
import { LandingComponent } from './creative_tim/landing/landing.component';
import { LoginComponent } from './creative_tim/login/login.component';
import { AuthGuard } from './shared/auth.guard';
const routes: Routes =[
    { path: 'tim_home',             component: HomeComponent },
    { path: 'tim_profile',     component: ProfileComponent },
    { path: 'tim_register',           component: SignupComponent },
    { path: 'tim_landing',          component: LandingComponent },
    { path: 'tim_login',          component: LoginComponent },
    { path: 'login', loadChildren: './login/login.module#LoginModule'},
    { path: 'profile', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    { path: '', redirectTo:'profile', pathMatch:"prefix"}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
