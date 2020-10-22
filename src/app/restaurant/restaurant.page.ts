import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {

  public name;

  constructor(private route : ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['id'];
    });
  }

}
