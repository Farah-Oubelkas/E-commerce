import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../../../services/user';
import { Http } from '@angular/http';
 
import { UserModel } from '../../../model/userModel';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
public sub;
public userActive:UserModel; 
private id;
selecteduser: UserModel ={
  id:null,
  first_name : null,
  last_name : null,
  address : null,
  email : null,
  contact : null,
  password : null,
  date: null
};
private confirm:String;
  constructor(private route: ActivatedRoute, private UserService:Users,private router: Router) {  
   }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
       this.selecteduser.id= +param; //conversion 
       console.log("hihi"+this.selecteduser.id);
       

      //this.getProduct(this.selectedProduct.id);
      this.getUser(param);
    }
}
getUser = (id1) => {
  this.sub = this.UserService.getUsers()
      .subscribe(res => {
        for (var _i = 0; _i < res.length; _i++) {
          if( res[_i].id ==id1) { 
          this.userActive = res[_i];

          console.log(" "+ _i+  res[_i] );
         console.log(" "+ _i+"**"+id1);
        }
      }
         
      })
};
onSubmit(form: NgForm) {
  console.log("------->"+this.selecteduser);
  this.selecteduser.date=this.userActive.date;
    this.UserService.postUser(this.selecteduser).subscribe(
      result => console.log("success submit: ", result),
      error => console.log("error: ",error)
    ); 
    this.router.navigate(['/gestion_users']);
  }

ngOnDestroy() {
  this.sub.unsubscribe();
}

}
