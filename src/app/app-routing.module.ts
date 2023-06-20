import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { Main2Component } from './components/main2/main2.component';
import { Main3Component } from './components/main3/main3.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'pd',component:Main2Component},
  {path:'manage',component:Main3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
