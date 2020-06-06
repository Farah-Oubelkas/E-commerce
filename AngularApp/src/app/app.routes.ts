import { ProductListComponent } from "./pages/product/product-list/product-list.component";
import { AuthGuardGuard } from './services/auth-guard.guard';
import {AdminGuardGuard} from './services/admin-guard.guard';


export const appRoutes=[
    {
        path:'',
        redirectTo:'category',
        pathMatch:'full'
    },
    {
        path:'category',
        canActivate: [AuthGuardGuard],
        loadChildren:'./pages/category/category.module#CategoryModule'
    },
    {
        path:'product',
        loadChildren:'./pages/product/product.module#ProductModule'
    },
    {
        path:'cart',
        canActivate: [AuthGuardGuard],
        loadChildren:'./pages/cart/cart-page.module#CartPageModule'
    },
    {
        path:'gestion_users',
        canActivate: [AdminGuardGuard],
        loadChildren:'./pages/admin/gestion_users/gestion_users.module#gestion_usersM'
        
    },
    {
        path:'**',
        loadChildren:'./pages/category/category.module#CategoryModule'
    },
];