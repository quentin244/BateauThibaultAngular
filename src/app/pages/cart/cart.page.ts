import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/getData.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { Product } from '../../dto/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss']
})
export class CartPage implements OnInit {
  public cart: [Product, number][] = [];

  constructor(
    private router: Router,
    private getDataService: GetDataService,
    private storage: Storage,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.getProductsInCart();
  }

  async onProductClick(item: [Product, number]): Promise<void> {
    const alert = this.alertCtrl.create({
      message: 'Choisissez la quantité',
      buttons: [
        {
          text: '1',
          handler: () => {
            this.clickButton(item, 1);
          }
        },
        {
          text: '2',
          handler: () => {
            this.clickButton(item, 2);
          }
        },
        {
          text: '3',
          handler: () => {
            this.clickButton(item, 3);
          }
        },
        {
          text: '4',
          handler: () => {
            this.clickButton(item, 4);
          }
        },
        {
          text: '5',
          handler: () => {
            this.clickButton(item, 5);
          }
        },
        {
          text: 'Ajouter 1',
          handler: () => {
            this.clickButton(item, '+1');
          }
        },
        {
          text: 'retirer 1',
          handler: () => {
            this.clickButton(item, -1);
          }
        }
      ]
    });
    await (await alert).present();
  }

  clickButton(item: [Product, number], quantity: string | number) {
    const index = this.cart.findIndex(
      (element) => element[0].name === item[0].name
    );
    if (index !== -1) {
      if (quantity === '+1') {
        quantity = this.cart[index][1] + 1;
      }
      if (quantity === -1) {
        if (this.cart[index][1] > 1) {
          quantity = this.cart[index][1] - 1;
        } else {
          localStorage.removeItem(this.cart[index][0].name);
          this.getProductsInCart();
        }
      }
      if (typeof quantity === 'number') {
        this.cart[index][1] = quantity;
      }
    }
  }

  getProductsInCart() {
    this.cart = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) ?? '';
      const item = localStorage.getItem(key) ?? '';
      this.cart.push([JSON.parse(item), this.getQuantity(item)]);
    }
  }

  getQuantity(item: string) {
    const objItem: Product = JSON.parse(item);
    for (const element of this.cart) {
      if (element[0].name === objItem.name) {
        return element[1];
      }
    }
    return 1;
  }

  toNavigateHome() {
    this.router.navigate(['/', 'home']);
  }

  toNavigateCart() {
    this.router.navigate(['/', 'cart']);
  }
}
