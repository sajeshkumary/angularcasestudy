import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User;

  myForm:FormGroup;

  constructor(private registerService:RegisterService,private router:Router) { 
this.user= new User();
    this.myForm= new FormGroup({
      uname:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      pwd:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      rpwd:new FormControl(null,[Validators.required])
    })
  }

  public get uname():any{
    return this.myForm.get('uname');
  } 

  public get pwd():any{
    return this.myForm.get('pwd');
  } 

  public get rpwd():any{
    return this.myForm.get('rpwd');
  } 
  
  ngOnInit(): void {
    
  }


  SignUp(){
    console.log(this.myForm);

    this.user = new User(this.uname.value ,this.pwd.value);
    
    console.log(this.user);

    var result = this.registerService.signUp(this.user);
    console.log('result',result);

    if(result=="1"){
      this.router.navigate(['signin']);
    }
    else{
      alert('Registration Failed');
    }
  }





}
