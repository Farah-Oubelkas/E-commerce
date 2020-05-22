import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Users } from '../../../services/user';
import { UserModel } from '../../../model/userModel';

@Component({
  selector: 'app-gestion_users',
  templateUrl: './gestion_users.component.html',
  styleUrls: ['./gestion_users.component.css']
})
export class GestionUsersComponent implements OnInit {
  filtereduser: UserModel[] = [];
  users: UserModel[] = [];
      _listFilter = '';
  public sub;
  constructor(private route:ActivatedRoute, private UserService:Users) {
console.log("hihiiiiiiiiiiiiiiiiiiiiiiiii"); 
    this._listFilter=" ";
  
    }
      get listFilter(): string {
        return this._listFilter;
      }
    
      set listFilter(value: string) {
        this._listFilter = value;
        this.filtereduser = this.listFilter ? this.performFilter(this.listFilter) : this.users;
      }
      performFilter(filterBy: string): UserModel[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.users.filter((user: UserModel) =>
        user.First_Name.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }
   
  ngOnInit() {
    
 
    this.load();
 
  }
 load = () => {
  this.sub = this.UserService.getUsers('./assets/mock-data/user.json')
       .subscribe(res => {this.users = res;
        this.filtereduser = this.users;})
};
Suppr(i:number):void{
 
 console.log("lililiiiiiiiiiiiiiiiiiiiiiiiiii");
 if (i !== -1) {
  this.users.splice(i, 1);
}  

}
}
