/**
 * Created by andrew.yang on 7/27/2017.
 */
import {CategoryComponent} from "./category.component";
import { CategorieProductComponent } from './ProductsCategorie/categorie-product.component';
export const categoryRoutes=[
    {
        path:'',
        component:CategoryComponent
    },
    {
        path:'CategorieProduct',
        component:CategorieProductComponent
    }
    
];