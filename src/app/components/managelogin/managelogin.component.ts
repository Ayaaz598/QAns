import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-managelogin',
  templateUrl: './managelogin.component.html',
  styleUrls: ['./managelogin.component.css']
})
export class ManageloginComponent {
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
     this.route.navigateByUrl('/manage'); 
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
