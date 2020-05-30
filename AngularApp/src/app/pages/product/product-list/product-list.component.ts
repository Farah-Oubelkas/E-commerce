 
  
import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import { ProductService } from '../../../services/products.service';
import { NgForm } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
 
declare var M: any;


@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth : number = 80;
  imageMargin = 2;
  _listFilter = '';
  errorMessage = '';

  mySubscription: any;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: Product[] = [];
  products: Product[] = [];

  constructor(private productService: ProductService,private router: Router) { 
    this.listFilter = 'Leaf Rake';
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  RefreshProductList(){
    this.productService.getProducts().subscribe((res) => {
      this.products= res as Product[];
      this.filteredProducts = this.products;
    });
  }
  
  ngOnInit() : void{
    this.RefreshProductList();
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.productService.deleteProduct(_id).subscribe((res) => {
        this.RefreshProductList();
        this.router.navigate(['/product/list']);
      });
    }
  }

ngOnDestroy() {
  if (this.mySubscription) {
    this.mySubscription.unsubscribe();
  }
}

}
 
