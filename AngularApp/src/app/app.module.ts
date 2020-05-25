import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {TopbarComponent} from "./components/topbar/topbar.component";
import {CartService} from "./services/cart.service";
import {CartPopupComponent} from "./pages/cart/cart-popup/cart-popup.component";
import {ProductService} from "./services/products.service";
<<<<<<< HEAD
import { GestionUsersComponent } from './pages/admin/gestion_users/gestion_users.component';
import { Users } from './services/user';
 
=======
import {HttpClientModule} from "@angular/common/http";
import { AuthModule } from './pages/auth/auth.module';
import { GestionUsersComponent } from './pages/admin/gestion_users/gestion_users.component';
import { Users } from './services/user';
import {FormsModule} from "@angular/forms";


>>>>>>> 07ba270ed89c9762c4ebb82b869411828310db88

@NgModule({
    declarations: [
        AppComponent,
        TopbarComponent,
        CartPopupComponent 
         
        
         
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpModule,
<<<<<<< HEAD
=======
        HttpClientModule,
        AuthModule,
        FormsModule,
        RouterModule, // added
>>>>>>> 07ba270ed89c9762c4ebb82b869411828310db88
        RouterModule.forRoot(appRoutes)
    ],
    providers: [CartService,ProductService,Users],
    bootstrap: [AppComponent]
})
export class AppModule { }
