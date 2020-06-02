import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel} from '../../../../model/userModel';
import {Users} from '../../../../services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  selectedUser: UserModel ={
    first_name:null,
    last_name:null,
    adresse:null,
    email:null,
    contact:null,
    password : null
  };

  constructor(private userService : Users,
    private router:Router
    ) { }

  ngOnInit() {
  }

  onSubmit(myform: NgForm) {
    console.log(myform.value);  // { first: '', last: '' }
    console.log(this.selectedUser.email); // false
  
    this.userService.postUser(this.selectedUser).subscribe(
      result => console.log("success submit: ", result),
      error => console.log("error: ",error),
    ); 
    this.router.navigate(['/login']);
  }
  }
