import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private routes:Router){}
  ngOnInit(){}
  stulog(){
    this.routes.navigateByUrl('login');
  }
  manglog(){
    this.routes.navigateByUrl('managelogin');
  }
}
