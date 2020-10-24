import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { GetDataService } from 'src/app/services/getData.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantPage implements OnInit {
  @Input() restaurants;

  constructor(private router: Router,
    private data: GetDataService) {}

  ngOnInit() {
    this.data.getRestaurants().subscribe(
      (resp)=>{
        this.restaurants = resp;
      }
    )
  }

  onRestaurantClick(item): void {
    this.router.navigate(["/", "restaurant", item.id]);
  }


}