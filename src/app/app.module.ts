import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Folders Modules
import { AboutModuleModule } from './About/about-module/about-module.module';
import { ContactModuleModule } from './Contact/contact-module/contact-module.module';
import { HelpModuleModule } from './Help/help-module/help-module.module';
import { HomeModuleModule } from './Home/home-module/home-module.module';
import { NotFoundModuleModule } from './Not Found/not-found-module/not-found-module.module';
import { TravelGuideModuleModule } from './Travel Guide/travel-guide-module/travel-guide-module.module';

// Footer Components
import { FooterComponent } from './Root Components/Footer/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './services/auth-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';

export function tokenGetter(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Folders Modules
    AboutModuleModule,
    ContactModuleModule,
    HelpModuleModule,
    HomeModuleModule,
    NotFoundModuleModule,
    TravelGuideModuleModule,
    // httpClient
    HttpClientModule,
    FormsModule,
    RouterModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [],
        disallowedRoutes: []
      }
    })
  ],
  exports:[
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
