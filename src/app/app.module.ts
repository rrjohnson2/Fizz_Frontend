import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
// import { SignupComponent } from './creative_tim/signup/signup.component';
import { LandingComponent } from './creative_tim/landing/landing.component';
import { ProfileComponent } from './creative_tim/profile/profile.component';
import { NavbarComponent } from './creative_tim/shared/navbar/navbar.component';
import { FooterComponent } from './creative_tim/shared/footer/footer.component';

import { HomeModule } from './creative_tim/home/home.module';
import { AuthGuard } from './shared/auth.guard';
import { SignupComponent } from './creative_tim/signup/signup.component';
import { LoginComponent } from './creative_tim/login/login.component';
import { GlobalService } from './services/global.service';
import { HttpClientModule } from '@angular/common/http';
import { UIService } from './services/ui.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
  ],
  providers: [AuthGuard,GlobalService,UIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
