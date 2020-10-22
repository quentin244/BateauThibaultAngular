import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../../services/getData.service'

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  @Input() restaurants;
  
  constructor(private router: Router, private data: GetDataService) { }

  ngOnInit() {
    this.data.getRestaurants().subscribe(
      (resp)=>{
        this.restaurants = resp;
      }
    )
  }

  onRestaurantClick(item): void {
    console.log(item);
    
    this.router.navigate(['/', 'restaurant', item.id]);
  }


}