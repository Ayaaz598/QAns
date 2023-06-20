import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Main2bodyComponent } from '../main2body/main2body.component';
@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent {
  constructor(private router:Router,){
  }
  click(){
    this.router.navigateByUrl('pd');
  }
}
