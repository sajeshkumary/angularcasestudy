import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user:User;

  myForm:FormGroup;

  constructor(private registerService:RegisterService,private router:Router) { 
     
    this.user= new User();
    this.myForm= new FormGroup({
      uname:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      pwd:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    })
  }

  public get uname():any{
    return this.myForm.get('uname');
  } 

  public get pwd():any{
    return this.myForm.get('pwd');
  } 

  
  ngOnInit(): void {
  }

  SignIn(){
    console.log(this.myForm);
    
    this.user = new User(this.uname.value ,this.pwd.value);
    
    console.log("userLogin",this.user);

   var result = this.registerService.signIn(this.user);
   console.log('result',result);

    if(result){
    localStorage.setItem('un',this.user.username)
      alert('login success')
    }
    else{
      alert('login Failed');
    }
}


}
