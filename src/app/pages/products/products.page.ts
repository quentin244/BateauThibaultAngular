import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/getData.service';
import { Category } from '../../dto/Category';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {
  public category: Category[];

  constructor(
    private router: Router,
    private getDataService: GetDataService
  ) {}

  ngOnInit() {
    this.getDataService.getCategories().subscribe((resp) => {
      this.category = resp;
    });
  }

  onProductClick(item: Category): void {
    this.router.navigate(['/', 'product-list', item.id]);
  }

  toNavigateHome() {
    this.router.navigate(['/', 'home']);
  }

  toNavigateCart() {
    this.router.navigate(['/', 'cart']);
  }
}
