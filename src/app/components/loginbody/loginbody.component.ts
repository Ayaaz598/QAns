import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-loginbody',
  templateUrl: './loginbody.component.html',
  styleUrls: ['./loginbody.component.css']
})
export class LoginbodyComponent {
  loginuser!: FormGroup;
  public inputType:string='password';
  user:User=new User();
  constructor(public service:LoginService,private route:Router,private formbuilder:FormBuilder) { }
  
  ngOnInit(): void {
     
  
    this.loginuser=this.formbuilder.group({

      email:['',Validators.required],
      password:['',Validators.required]

    })
  
  }

  onlogin(){

     this.service.userRegistration(this.user).subscribe((data)=>{
      
     });    
    if(this.loginuser.valid){
     this.route.navigateByUrl('/main'); 
       }
       else
       {
    
        this.validateAllFormFields(this.loginuser);
        alert('Yours form is invaild');  
    }
    }
  
  
    private validateAllFormFields(formgroup:FormGroup){
  
      Object.keys(formgroup.controls).forEach(fields=>{
        const control= formgroup.get(fields);
        if(control instanceof FormControl){
          control.markAsDirty({onlySelf:true});
        }else if(control instanceof FormGroup){
          this.validateAllFormFields(control)
        }
      })
    }
  
    public changepassword(event:any):void{
      event.target.checked ? this.inputType= 'text' : this.inputType='password'
   
   }
  }
