import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/products.service";
import { Product } from "../../model/product";
import { CartService } from "../../services/cart.service";
import { Router } from "@angular/router";
import { min } from 'rxjs/operator/min';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    products: Product[] = [];
    test: Product[] = [];
    private sub;
    filteredProducts: Product[] = [];
    _cat = '';
    _minPrice = '';
    _maxPrice = '';

    get cat(): string {
        return this._cat;
    }

    set cat(value: string) {
        this._cat = value;
        this.filteredProducts = this.cat ? this.performFilter(this.cat) : this.products;
    }

    get minPrice(): string {
        return this._minPrice;
    }

    set minPrice(value: string) {
        this._minPrice = value;
        this.filteredProducts = this.cat ? this.performFilter(this.cat) : this.products;
    }

    get maxPrice(): string {
        return this._maxPrice;
    }

    set maxPrice(value: string) {
        this._maxPrice = value;
        this.filteredProducts = this.cat ? this.performFilter(this.cat) : this.products;
    }

    constructor(
        private productService: ProductService,
        private cartService: CartService,
        private router: Router
    ) { 
    }

    performFilter(filterBy: string): Product[] {
        
/*         this.test =  this.products.filter((product: Product) =>
          product.category.toLocaleLowerCase().indexOf(filterBy) !== -1);
        console.log(this.test);
        return this.test; */
        this.test=[];
        console.log(this.maxPrice);
        for (let product of this.products){
            var categ = product.category.toLocaleLowerCase();
            var prix = product.price;
            if(categ==filterBy && (prix >= parseInt(this.minPrice) && prix <= parseInt(this.maxPrice))){
            this.test.push(product)
            }
        }
        this.filteredProducts = this.test;
        return this.filteredProducts;
    }

    ngOnInit() {
        this.load();
    }

    load = () => {
        this.sub = this.productService.getProducts()
            .subscribe(res => {
                this.products = res;
                this.filteredProducts = this.products;
                console.log(this.filteredProducts);
            })
    };

    addToCart = (product) => {
        this.cartService.addToCart({ product, quantity: 1 })
    };




    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
