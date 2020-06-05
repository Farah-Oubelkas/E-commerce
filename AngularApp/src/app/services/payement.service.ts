import { Injectable } from '@angular/core';
import { payement } from '../model/payement';
import { Http, Response } from "@angular/http";

@Injectable()
export class PayementService {
  private url ="http://localhost:3000/payement";
  constructor(public http: Http) { }

  
  addPayement(pay: payement){
    return this.http.post(this.url, pay);
  }




}
