import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/getData.service';
import { Storage } from '@ionic/storage'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  public cart;

  constructor(
    private router: Router,
    private getDataService: GetDataService,
    private storage: Storage,
    ) {  }

  ngOnInit() {
    this.getDataService.getCategories()
    .subscribe(
      (resp)=>{
        this.cart = resp
      }
    );
  }

  onProductClick(item): void {
    console.log(item);
  }

  toNavigateHome(){
    this.router.navigate(['/', 'home']);
  }
  toNavigateCart(){
    this.router.navigate(['/', 'cart']);
  }

}
