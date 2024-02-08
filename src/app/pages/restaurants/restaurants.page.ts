import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/getData.service';
import { Restaurant } from '../../dto/Restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss']
})
export class RestaurantPage implements OnInit {
  protected restaurants: Restaurant[];

  constructor(
    private router: Router,
    private getDataService: GetDataService
  ) {}

  ngOnInit() {
    this.getDataService.getRestaurants().subscribe((resp) => {
      this.restaurants = resp;
    });
  }

  onRestaurantClick(item: Restaurant): void {
    this.router.navigate(['/', 'restaurant', item.id]);
  }
}
