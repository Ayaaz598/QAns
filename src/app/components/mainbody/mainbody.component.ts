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
  clickpd(){
    this.router.navigateByUrl('pd');
  }
  clickfd(){
    this.router.navigateByUrl('fd');
  }
  clickhd(){
    this.router.navigateByUrl('hd');
  }
  clickld(){
    this.router.navigateByUrl('ld');
  }
  clicktd(){
    this.router.navigateByUrl('td');
  }
}
