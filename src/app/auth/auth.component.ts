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
  registerForm: FormGroup;
  loginForm: FormGroup;

  constructor(private authService : AuthenticationService) { 

  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      fullName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      phoneNumber: new FormControl(''),
      address: new FormControl('')
        });
      
      this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
       });
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
          console.log("error="+ JSON.stringify(err));
        })
     }
     else
     {
        //register form
     }
     
  }

}
