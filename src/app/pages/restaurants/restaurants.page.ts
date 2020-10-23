import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantPage implements OnInit {
  @Input() restaurants = [{"name":"Bistrot des Gascons","id":0 },{"name":"Les fous de l'ile","id":1},{"name":"Bistrot Landais","id":2},{"name":"Villa 9-Trois","id":3},{"name":"Bistrot du Sommelier", "id":4}];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  onRestaurantClick(item): void {
    this.router.navigate(["/", item.id]);
  }


}