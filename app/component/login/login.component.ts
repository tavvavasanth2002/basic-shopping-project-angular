import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup=new FormGroup("");
  constructor(private fb:FormBuilder,private router:Router){
    this.loginForm=this.fb.group({
      username:["",Validators.required],
      password:["",Validators.required]
    })
  }
  check(){
    console.log(this.loginForm);
    if(this.loginForm.value.password=="12345"){
      this.router.navigateByUrl("/navabar");
      localStorage.setItem("log",JSON.stringify(this.loginForm.value))
    }
    else{
      alert("Login Failed");
    }
  }
}
