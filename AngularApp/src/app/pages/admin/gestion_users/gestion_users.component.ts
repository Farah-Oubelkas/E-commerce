import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router,NavigationEnd} from "@angular/router";
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
  mySubscription: any;

  constructor(private route:ActivatedRoute, private UserService:Users,private router: Router) {
console.log("hihiiiiiiiiiiiiiiiiiiiiiiiii"); 
    this._listFilter="";
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  
    }
      get listFilter(): string {
        return this._listFilter;
      }
    
      set listFilter(value: string) {
        this._listFilter = value;
        this.filtereduser = this.listFilter ? this.performFilter(this.listFilter) : this.users;
      }
      performFilter(filterBy: string): UserModel[] {
        console.log("toLocaleLowerCase  "+this.listFilter);
        filterBy = filterBy.toLocaleLowerCase();
        console.log("toLocaleLowerCase2222  "+filterBy);
        
        return this.users.filter((user: UserModel) =>     

        user.first_name.toLocaleLowerCase().indexOf(filterBy) !== -1);

      }
   
  ngOnInit() {
    
     
    this.RefreshUserList();

  }
 load = () => {
  this.sub = this.UserService.getUsers()
       .subscribe(res => {this.users = res;
        this.filtereduser = this.users;
          
      })
};
Suppr(i:number):void{
 
 
 if (i !== -1) {
  this.users.splice(i, 1);
}  
if (confirm('Are you sure to delete this USER ?') == true) {
  this.UserService.deleteUser(i).subscribe((res) => {
    this.RefreshUserList();
    this.router.navigate(['/gestion_users']);
  });
}

}

RefreshUserList(){
  this.UserService.getUsers().subscribe((res) => {
    this.users= res as UserModel[];
    this.filtereduser = this.users;
  });
}

ngOnDestroy() {
  if (this.mySubscription) {
    this.mySubscription.unsubscribe();
  }
}

}
