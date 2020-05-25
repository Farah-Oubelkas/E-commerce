import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from "../../../model/product";
import { ProductService } from '../../../services/products.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  errorMessage = '';
  private id : number;
    
  selectedProduct: Product ={
    title:null,
    brand:null,
    image:null,
    description:null,
    category:null,
    price : null,
    id:null
  }; 

  constructor(private route: ActivatedRoute,
    private productService: ProductService,private router: Router) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
       this.selectedProduct.id= +param; //conversion 
      //this.getProduct(this.selectedProduct.id);
    }
  }
  
  onSubmit(form: NgForm) {
    console.log(this.selectedProduct);
      this.productService.postProduct(this.selectedProduct).subscribe(
        result => console.log("success submit: ", result),
        error => console.log("error: ",error)
      ); 
      this.router.navigate(['/product/list']);
    }

/*   getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  } */



}
