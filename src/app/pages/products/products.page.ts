import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  public products;

  constructor(
    private productService: ProductService,
    private router: Router
    ) {
  }


  ngOnInit() {
    this.productService.getProducts()
    .subscribe(
      (resp)=>{
        this.products = resp
      }
    );
  }

  onProductClick(item): void {
    console.log(item);
    this.router.navigate(['/', 'products', item.id]);
  }
}
