import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../dto/Product';
import { Recipe } from '../dto/Recipe';
import { Boat } from '../dto/Boat';
import { Restaurant } from '../dto/Restaurant';
import { Category } from '../dto/Category';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../assets/json/products.json');
  }

  getRecettes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('../assets/json/recettes.json');
  }

  getBateaux(): Observable<Boat[]> {
    return this.http.get<Boat[]>('../assets/json/bateaux.json');
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>('../assets/json/restaurants.json');
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('../assets/json/categories.json');
  }
}
