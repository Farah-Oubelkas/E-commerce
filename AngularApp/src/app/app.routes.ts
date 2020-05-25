/**
 * Created by andrew.yang on 7/27/2017.
 */
export const appRoutes=[
    {
        path:'',
        redirectTo:'category',
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
<<<<<<< HEAD
 
=======
>>>>>>> 07ba270ed89c9762c4ebb82b869411828310db88
    {
        path:'**',
        loadChildren:'./pages/category/category.module#CategoryModule'
    }
 
    
 
];