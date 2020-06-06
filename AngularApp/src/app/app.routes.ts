import { ProductListComponent } from "./pages/product/product-list/product-list.component";

export const appRoutes=[
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'category',
        loadChildren:'./pages/category/category.module#CategoryModule'
    },
    {
        path:'product',
        loadChildren:'./pages/product/product.module#ProductModule'
    },
    {
        path:'cart',
        loadChildren:'./pages/cart/cart-page.module#CartPageModule'
    },
    {
        path:'gestion_users',
        loadChildren:'./pages/admin/gestion_users/gestion_users.module#gestion_usersM'
        
    },
    {
        path:'**',
        loadChildren:'./pages/category/category.module#CategoryModule'
    },
];