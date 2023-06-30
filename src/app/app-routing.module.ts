import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { Main2Component } from './components/main2/main2.component';
import { Main3Component } from './components/main3/main3.component';
import { FooddeptComponent } from './components/fooddept/fooddept.component';
import { HosteldeptComponent } from './components/hosteldept/hosteldept.component';
import { LibdeptComponent } from './components/libdept/libdept.component';
import { TransportdeptComponent } from './components/transportdept/transportdept.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ManageloginComponent } from './components/managelogin/managelogin.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'main',component:MainComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'pd',component:Main2Component},
  {path:'fd',component:FooddeptComponent},
  {path:'hd',component:HosteldeptComponent},
  {path:'ld',component:LibdeptComponent},
  {path:'td',component:TransportdeptComponent},
  {path:'manage',component:Main3Component},
  {path:'managelogin',component:ManageloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
