import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
users:User[];


  constructor() { 
this.users=[];
  }

  signUp(user:User){

    this.users.push(user);
    console.log("users",this.users);
    return "1";
  }

  getAllUsers(){
   return this.users;
  }

  signIn(user:User){
    var found = false;
    this.users.forEach(element => {
      console.log("element",element)
      console.log("user",user)
      if( element.username == user.username && element.password==user.password){
        found= true;
      }
    });
    return found;
    //  var index:number = this.users.findIndex(u => u.username == user.username);
  }

}
