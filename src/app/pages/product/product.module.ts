import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { productRoutes} from "./product.routes";
import {SharedModule} from "../../shared/shared.module";
import {ProductComponent} from "./product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(productRoutes)
    ],
    declarations: [
        ProductComponent,
        ProductListComponent,
        ProductAddComponent,
        ProductEditComponent
    ]
})
export class ProductModule { }