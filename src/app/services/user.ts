
import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs";
 
 
 
@Injectable()
export class Users {
 priv
 
 
    constructor(private  http: Http) {}
 
    public getUsers(dataURL:string){
        
        return this.http.get(dataURL)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error || 'Server error'));
    }
}