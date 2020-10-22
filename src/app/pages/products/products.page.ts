import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/getData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  public category = [{"name":"Poisson", "id":0},{"name":"Coquillage", "id":1},{"name":"Crustace", "id":2},{"name":"Promotion", "id":3}];

  constructor(
    private getDataService: GetDataService,
    private router: Router
    ) {
  }


  ngOnInit() {

  }

  onProductClick(item): void {
    console.log(item);
    this.router.navigate(['/', 'product-list', item.id]);
  }
}
