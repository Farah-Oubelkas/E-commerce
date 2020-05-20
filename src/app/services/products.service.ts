
import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import { catchError, tap, map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';


@Injectable()
export class ProductService {
    private productUrl = "../../assets/mock-data/products.json";
    constructor(public http: Http) { }

     public getProducts(){
        return this.http.get(this.productUrl)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error || 'Server error'));
    } 

    getProduct(id: number): Observable<Product | undefined> {
        return this.getProducts()
          .pipe(
            map((products: Product[]) => products.find(p => p.product_id === id))
          );
      }

/*     onSubmit(form :NgForm):{

    }
 */
    

}