import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {QuantityControlComponent} from "../components/quantity-control/quantity-control.component";
import { RouterModule } from "@angular/router";
@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations:[
        QuantityControlComponent
    ],
    exports:[
        CommonModule,
        FormsModule,
        QuantityControlComponent
    ]
})

export class SharedModule {

}