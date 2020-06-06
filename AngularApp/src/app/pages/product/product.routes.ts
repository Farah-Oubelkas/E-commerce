
import {ProductComponent} from "./product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAddComponent} from "./product-add/product-add.component";
import { ProductEditComponent} from "./product-edit/product-edit.component";
import {AdminGuardGuard} from '../../services/admin-guard.guard';


export const productRoutes=[
    {
        path:'add',
        canActivate: [AdminGuardGuard],
        component:ProductAddComponent
    },
    {
        path:'list',
        canActivate: [AdminGuardGuard],
        component:ProductListComponent
    },
    {  
        path:'edit/:id',
        canActivate: [AdminGuardGuard],
        component:ProductEditComponent
    },
    {
        path:':id',
        component:ProductComponent
    }

];