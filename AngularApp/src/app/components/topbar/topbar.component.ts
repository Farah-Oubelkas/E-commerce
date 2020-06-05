import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Users} from '../../services/user';

@Component({
    selector: 'top-bar',
    styleUrls: ['./top-bar.component.css'],
    templateUrl: './test.html'
    
})
export class TopbarComponent implements OnInit {
    public collapse: boolean = false;
    public cart_num:number;

    username = localStorage.getItem('currentUser');
    constructor(
        private cartService: CartService, private user_s : Users
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
}