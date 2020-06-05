import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
    selector: 'top-bar',
    styleUrls: ['./top-bar.component.css'],
    template: `
<div class="main-header navbar-fixed-top">
<div class="nav-item">
    <div class="container">
        <nav class="nav-menu mobile-menu">
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./shop.html">Shop</a></li>
                <li><a href="#">Collection</a>
                    <ul class="dropdown">
                        <li><a href="#">Men's</a></li>
                        <li><a href="#">Women's</a></li>
                        <li><a href="#">Kid's</a></li>
                    </ul>
                </li>
                <li><a href="./contact.html">Payement</a></li>
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
    constructor(
        private cartService: CartService
    ) { }

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
}