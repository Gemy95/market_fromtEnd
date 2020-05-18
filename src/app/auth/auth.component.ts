import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators  } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
  
  auth_flag = false ;
  emailRegEx = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]+[com | net]{3}$';

  registerForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phoneNumber: new FormControl(''),
    address: new FormControl('')
      });
    
    loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern(this.emailRegEx)
            ]),
    password: new FormControl('',[Validators.required]),
     });

     

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }


  constructor(private authService : AuthenticationService) { 

  }

  ngOnInit() {
    
  }

  onSubmit (form:FormGroup,flag:boolean)
  {
     if(flag)
     {
        //login form
        this.authService.loginUser(form.value).subscribe(
        (data)=>{
            console.log("data="+JSON.stringify(data));
        },(err)=>{
          console.log("error="+ JSON.stringify(err.error.message));
        })
     }
     else
     {
        //register form
     }
     
  }

}
