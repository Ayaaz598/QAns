import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginbody',
  templateUrl: './loginbody.component.html',
  styleUrls: ['./loginbody.component.css']
})
export class LoginbodyComponent {
  constructor(private route:Router){}
  ngOnInit(){}
  login(){
    this.route.navigateByUrl('pd')
  }
}
