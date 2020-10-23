import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  @Input() restaurants = [{"name":"Bistrot des Gascons","img": "../assets/img/desGascons_icon.png", "id":0},{"name":"Les fous de l'île","img": "../assets/img/fousDeLIle_icon.png", "id":1},{"name":"Bistrot Landais","img": "../assets/img/bistrotLandais_icon.png", "id":2},{"name":"Villa 9-Trois","img": "../assets/img/villa9Trois_icon.png", "id":3},{"name":"Bistrot du Sommelier","img": "../assets/img/duSommelier_icon.png", "id":4},{"name":"Devenez partenaire!","img": "../assets/img/poulpe.png", "id":5}];
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onRestaurantClick(item): void {
    console.log(item);
    
    this.router.navigate(['/', 'restaurant', item.id]);
  }


}