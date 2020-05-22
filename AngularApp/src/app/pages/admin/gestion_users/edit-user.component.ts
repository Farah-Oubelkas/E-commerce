import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../../../services/user';
import { Http } from '@angular/http';
import { GestionUsersComponent } from './gestion_users.component';
 

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
public sub;
public userActive:Users; 
private id;
  constructor(private route: ActivatedRoute, private UserService:Users) {  
    console.log("LLLLLLLLLLLLLLLLLLLLLLLLLLLL"); }

  ngOnInit() {
    this.route.params
        .subscribe(res => {
            this.getUser(res.id);
        })
}
getUser = (id) => {
  this.sub = this.UserService.getUsers('./assets/mock-data/user.json')
      .subscribe(res => {
         
          this.userActive = res[id];
      })
};
ngOnDestroy() {
  this.sub.unsubscribe();
}

}
