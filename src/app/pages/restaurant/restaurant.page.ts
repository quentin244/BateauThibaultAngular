import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/services/getData.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  public id;
  public restaurant;

  constructor(private route : ActivatedRoute,
    private data: GetDataService) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.data.getRestaurants().subscribe(
      (resp)=>{
        for (let index in resp) {
          if (resp[index].id == this.id)
            this.restaurant = resp[index];
        }
        });
      }
  }
