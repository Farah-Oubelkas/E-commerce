import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/products.service';
import {Product} from "../../../model/product";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
  providers: [ProductService]
})
export class ProductAddComponent implements OnInit {

  products: Product[] = [];
  selectedProduct: Product ={
    title:null,
    brand:null,
    image:null,
    description:null,
    category:null,
    price : null,
    id:null
  };
  

  constructor(private productService: ProductService) { }

  onSubmit(form: NgForm) {
    console.log(this.selectedProduct);
      this.productService.postProduct(this.selectedProduct).subscribe(
        result => console.log("success submit: ", result),
        error => console.log("error: ",error)
      ); 
    }


  ngOnInit() {
   
  }



}
