import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Users} from '../../services/user';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'top-bar',
    styleUrls: ['./top-bar.component.css'],
    template: `
    <div class="main-header navbar-fixed-top">
    <div class="header-top">
        <div class="container">
            <div class="ht-left">
                <div class="mail-service">
                    <i class=" fa fa-envelope"></i>
                    {{this.user_s.username}}
                </div>
                <div class="phone-service">
                    <i class=" fa fa-phone"></i>
                    +65 11.188.888
                </div>
            </div>
            <div class="ht-right">
                <a [routerLink]="['/login']" class="login-panel"><i class="fa fa-user"></i>Login</a>
            </div>
            
        </div>
    </div>
    <div class="nav-item">
        <div class="container">
            <nav class="nav-menu mobile-menu">
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a [routerLink]="['/category']">Shop</a></li>
                    <li><a href="#">Admin Space</a>
                        <ul class="dropdown">
                            <li><a routerLink="/product/list">Manage products</a></li>
                            <li><a routerLink="/gestion_users">Manage users</a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="header-cart-wrapper nav-menu mobile-menu">
                            <div class="header-cart" (click)="toggleCartPopup($event)">
                                <div class="mobil-shopping-cart">
                                    <span><span *ngIf="cart_num">( {{cart_num}} )</span></span>
                                </div>
                                <div class="header-cart-item">
                                    <a href="">MY CART <span *ngIf="cart_num">( {{cart_num}} )</span><span class="fa fa-caret-down"></span></a>
                                </div>
                            </div>
                        </div>
                        <cart-popup></cart-popup>
                    </li>
                    <li><a href="#">Profile</a>
                        <ul class="dropdown">
                            <li><a (click)="logout()">Log out</a></li>

                        </ul>
                    </li>
                </ul>
                
            </nav>
            
            <div id="mobile-menu-wrap"></div>
        </div>
    </div>
    </div>
    `
    
})
export class TopbarComponent implements OnInit {
    public collapse: boolean = false;
    public cart_num:number;
    mySubscription: any;

    username = localStorage.getItem('currentUser');
    constructor(
        private cartService: CartService, private user_s : Users,private router:Router
    ) { 

    }

    ngOnInit() {
        this.cartService.cartListSubject
            .subscribe(res => {
                this.cart_num = res.length;
            })
    }
    toggleCartPopup = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.cartService.toggleCart()
    }

    logout(){
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }
}