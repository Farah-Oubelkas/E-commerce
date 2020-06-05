import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { AuthService } from '../../../../services/auth.service';
import {Users} from '../../../../services/user';
import {UserModel} from '../../../../model/UserModel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:UserModel[]= [];


  
   email :String =null;
  password:String = null;
  constructor(private userService : Users,
    private router:Router) { }
    refreshUserList(){
       this.userService.getAllUsers().subscribe((res) => {
            this.users= res as UserModel[];
          });
      }
  ngOnInit():void {
    this.refreshUserList();

  }



  onSubmit(myfrom:NgForm){
  
   console.log(myfrom.value);
   console.log(this.users);
  
   for(let user of this.users){
    console.log(this.email +""+this.password);
     if(user.email == this.email && user.password==this.password){

     console.log("vrai");
     this.router.navigate(['/category']);

     break;
    }
    this.router.navigate(['/login']);


   }
  }
}