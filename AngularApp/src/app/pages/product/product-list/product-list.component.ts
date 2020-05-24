import { Component, OnInit } from '@angular/core';
import {Product} from "../../../model/product";
import { ProductService } from '../../../services/products.service';

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

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: Product[] = [];
  products: Product[] = [];

  constructor(private productService: ProductService) { 
    this.listFilter = 'Leaf Rake';
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
  

}
