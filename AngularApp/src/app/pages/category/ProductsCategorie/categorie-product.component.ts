import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../../model/product";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categorie-product',
  templateUrl: './categorie-product.component.html',
  styleUrls: ['./categorie-product.component.css']
})
export class CategorieProductComponent implements OnInit {
  Products: Product[]=[];
  category : String;
  protuctByCategorie :Product[]=[];
  constructor(private route: ActivatedRoute,
    private productService:ProductService) { }

  ngOnInit() {
  this.refreshProductList();
  }

  refreshProductList(){
     this.productService.getAllproductTest().subscribe((res) => {
         this.protuctByCategorie= res as Product[];
         this.Products= res as Product[];
       });
   }
   
  getListbyCategoris (){
    this.protuctByCategorie=[];
     
        for (let product of this.Products){
        if(product.category==this.category){
        this.protuctByCategorie.push(product)
      }
    
      }
      return this.protuctByCategorie;

  }

  onSubmit( mfrom:NgForm){
    console.log(this.category);

    console.log(this.protuctByCategorie)
    this.getListbyCategoris();
  
    

}
}