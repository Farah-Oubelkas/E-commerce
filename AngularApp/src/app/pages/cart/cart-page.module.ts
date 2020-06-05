
import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {CartPageComponent} from "./cart-page.component";
import {cartPageRoutes} from "./cart-page.routes";
import { PayementComponent } from './payement/payement.component';
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(cartPageRoutes)
    ],
    declarations: [
        CartPageComponent,
        PayementComponent
    ]
})
export class CartPageModule { }