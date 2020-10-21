import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  @Input() restaurants = [{"name":"Bistrot des Gascons"},{"name":"Les fous de l'ile"},{"name":"Bistrot Landais"},{"name":"Villa 9-Trois"}];
  
  constructor() { }

  ngOnInit() {
  }

  onRestaurantClick(item): void {
    console.log(item);
  }


}