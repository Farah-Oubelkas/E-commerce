 
import {GestionUsersComponent} from "./gestion_users.component";
import { EditUserComponent } from "./edit-user.component";
 

export const gestion_usersP=[
    {
        path:'editUser/:id',
        component:EditUserComponent
    },{
        path:'',
        component:GestionUsersComponent
    } 

];