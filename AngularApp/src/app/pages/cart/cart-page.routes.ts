import {CartPageComponent} from "./cart-page.component";
import {PayementComponent} from "./payement/payement.component";
export const cartPageRoutes=[
    {
        path:'payement',
        component:PayementComponent
    },
    {
        path:'',
        component:CartPageComponent
    },
    {
        path:'payement',
        component:PayementComponent
    }
];