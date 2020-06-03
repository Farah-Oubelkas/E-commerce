import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/products.service";
import {Product} from "../../model/product";
import {CartService} from "../../services/cart.service";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    private sub;
    product: Product;
    errorMessage = '';
    quantity: number = 1;
    constructor(private route: ActivatedRoute,
                private productService:ProductService,
                private cartService:CartService
    ) { }

    ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param; //conversion 
      this.getProduct(id);
    }
    }

    getProduct(id: number) {
        this.productService.getProduct(id).subscribe(
            res => {
                this.product = res[0]; 
            }     
        );
      } 

    changeQuantity = (newQuantity:number) => {
        this.quantity = newQuantity;
    };

    addToCart = (product) => {
        if(this.quantity) this.cartService.addToCart({product,quantity:this.quantity})
    };
    
    ngOnDestroy() {
        
    }
}
