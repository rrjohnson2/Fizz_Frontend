import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './creative_tim/signup/signup.component';
import { LandingComponent } from './creative_tim/landing/landing.component';
import { ProfileComponent } from './creative_tim/profile/profile.component';
import { NavbarComponent } from './creative_tim/shared/navbar/navbar.component';
import { FooterComponent } from './creative_tim/shared/footer/footer.component';

import { HomeModule } from './creative_tim/home/home.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
