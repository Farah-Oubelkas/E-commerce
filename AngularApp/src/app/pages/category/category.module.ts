/**
 * Created by andrew.yang on 7/27/2017.
 */
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {categoryRoutes} from "./category.routes";
import {SharedModule} from "../../shared/shared.module";
import {CategoryComponent} from "./category.component";

import { CategorieProductComponent } from './ProductsCategorie/categorie-product.component';
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(categoryRoutes)
    ],
    declarations: [
        CategoryComponent,
        CategorieProductComponent,
    ]
})
export class CategoryModule { }