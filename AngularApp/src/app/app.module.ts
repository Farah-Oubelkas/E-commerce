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
import {HttpClientModule} from "@angular/common/http";
import { AuthModule } from './pages/auth/auth.module';
import { Users } from './services/user';
import {FormsModule} from "@angular/forms";
import {PayementService} from "./services/payement.service";
import { AuthGuardGuard } from './services/auth-guard.guard';
import {AdminGuardGuard} from './services/admin-guard.guard';
import {HomeModule} from './pages/home/home.module';





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
        HttpClientModule,
        AuthModule,
        HomeModule,
        FormsModule,
        RouterModule, // added
        RouterModule.forRoot(appRoutes)
    ],
    providers: [CartService,ProductService,Users,PayementService,AuthGuardGuard,AdminGuardGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
