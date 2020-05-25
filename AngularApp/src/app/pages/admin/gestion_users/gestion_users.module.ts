<<<<<<< HEAD
/**
 * Created by andrew.yang on 7/27/2017.
 */
=======
>>>>>>> 07ba270ed89c9762c4ebb82b869411828310db88
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {gestion_usersP} from "./gestion_users.routes";
import {SharedModule} from "../../../shared/shared.module";
import {GestionUsersComponent} from "./gestion_users.component";
import { EditUserComponent } from "./edit-user.component";
 
 
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(gestion_usersP)
    ],
    declarations: [
        GestionUsersComponent, 
        EditUserComponent
        
    ]
})
export class gestion_usersM {



    
 }