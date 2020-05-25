/**
 * Created by andrew.yang on 7/27/2017.
 */

<<<<<<< HEAD
import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs";
=======
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { Product } from "../model/product";
import { catchError, tap, map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

>>>>>>> 07ba270ed89c9762c4ebb82b869411828310db88


@Injectable()
export class ProductService {
<<<<<<< HEAD

    constructor(public http: Http) { }

    public getProducts(dataURL:string){
        return this.http.get(dataURL)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error || 'Server error'));
    }
=======
  private productUrl = "http://localhost:3000/products";

  constructor(public http: Http) { }

  public getProducts() {
    return this.http.get(this.productUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getProduct(id: number): Observable<Product | undefined> {
    return this.getProducts()
      .pipe(
        map((products: Product[]) => products.find(p => p.id === id))
      );
  }

  postProduct(prod: Product){
    return this.http.post(this.productUrl, prod);
  }


  deleteProduct(_id: string) {
    return this.http.delete(this.productUrl + `/${_id}`);
  }


  /*     onSubmit(form :NgForm):{
  
      }
   */


>>>>>>> 07ba270ed89c9762c4ebb82b869411828310db88
}