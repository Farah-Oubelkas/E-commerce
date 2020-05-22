
import {ProductComponent} from "./product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAddComponent} from "./product-add/product-add.component";
import { ProductEditComponent} from "./product-edit/product-edit.component";


export const productRoutes=[
    {
        path:'add',
        component:ProductAddComponent
    },
    {
        path:'list',
        component:ProductListComponent
    },
    {  
        path:'edit/:id',
        component:ProductEditComponent
    },
    {
        path:':id',
        component:ProductComponent
    }

];