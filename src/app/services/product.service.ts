import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }
     
    getProducts() {
        //return this.http.get(`https://us-central1-projetbateau-d52df.cloudfunctions.net/products/`);
        return this.http.get("../assets/json/product.json");
    }
}
