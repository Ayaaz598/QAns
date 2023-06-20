import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedpages/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { MainbodyComponent } from './components/mainbody/mainbody.component';
import { FooterComponent } from './sharedpages/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Navbar1Component } from './sharedpages/navbar1/navbar1.component';
import { LoginbodyComponent } from './components/loginbody/loginbody.component';
import { RegisterbodyComponent } from './components/registerbody/registerbody.component';
import { Main2Component } from './components/main2/main2.component';
import { Main2bodyComponent } from './components/main2body/main2body.component';
import { QueryComponent } from './components/query/query.component';
import { Main3Component } from './components/main3/main3.component';
import { Main3bodyComponent } from './components/main3body/main3body.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    MainbodyComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    Navbar1Component,
    LoginbodyComponent,
    RegisterbodyComponent,
    Main2Component,
    Main2bodyComponent,
    QueryComponent,
    Main3Component,
    Main3bodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
