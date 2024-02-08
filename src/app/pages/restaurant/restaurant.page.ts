import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/services/getData.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss']
})
export class RestaurantPage implements OnInit {
  public id: number;
  public name: string;
  public image: string;
  public subtitle: string;
  public description: string[];

  constructor(
    private route: ActivatedRoute,
    private getDataService: GetDataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.getDataService.getRestaurants().subscribe((resp) => {
      this.name = resp[this.id].name;
      this.image = resp[this.id].image;
      this.subtitle = resp[this.id].subtitle;
      this.description = resp[this.id].description;
    });
  }
}
