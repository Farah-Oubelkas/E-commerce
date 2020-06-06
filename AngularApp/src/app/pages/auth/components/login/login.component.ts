import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { AuthService } from '../../../../services/auth.service';
import { Users } from '../../../../services/user';
import { UserModel } from '../../../../model/UserModel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: UserModel[] = [];


  email: String = null;
  password: String = null;
  constructor(private userService: Users,
    private router: Router) { }



  refreshUserList() {
    this.userService.getAllUsers().subscribe((res) => {
      this.users = res as UserModel[];
    });
  }
  ngOnInit(): void {
    this.refreshUserList();

  }

  onSubmit(myfrom: NgForm) {

    if (this.email == 'admin@gmail.com' && this.password == '123') {
      this.userService.username = 'Admin';
      this.userService.isAdmin = true;
      localStorage.setItem('currentUser', this.userService.username);
      this.router.navigate(['/product/list']);
    }
    else{
    for (let user of this.users) {
      console.log(this.email + "" + this.password);
      if (user.email == this.email && user.password == this.password) {
        this.userService.username = this.email;
        localStorage.setItem('currentUser', this.userService.username);
        this.userService.isLogenIn = true;
        this.router.navigate(['/category']);
        break;
      } else {
        this.router.navigate(['/login']);
      }
    }
    }
  }
  
}