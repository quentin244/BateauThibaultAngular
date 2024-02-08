import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from 'src/app/services/getData.service';
import { Product } from '../../dto/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss']
})
export class ProductListPage implements OnInit {
  public ok = false;
  public productCartExist = false;
  protected products: Product[];
  protected category: number;

  constructor(
    private getDataService: GetDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.category = parseInt(params['id']);
    });

    this.getDataService.getProducts().subscribe((resp) => {
      this.products = resp;
    });
  }

  addCart(item: Product): void {
    this.productCartExist = false;
    if (this.productInCart(item.name)) {
      localStorage.removeItem(item.name);
    } else {
      localStorage.setItem(item.name, JSON.stringify(item));
    }
  }

  productInCart(name: string) {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === name) {
        return true;
      }
    }
    return false;
  }

  toNavigateHome() {
    this.router.navigate(['/', 'home']);
  }

  toNavigateCart() {
    this.router.navigate(['/', 'cart']);
  }
}
