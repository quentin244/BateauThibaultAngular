import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.page.html',
  styleUrls: ['./recette.page.scss'],
})
export class RecettePage implements OnInit {
  @Input() recettes = [{"name":"Homard","img": "../assets/homard.png", "id":0},{"name":"St Jaques","img": "../assets/saintJacques_icon.png", "id":1},{"name":"Bar","img": "../assets/barRecette_icon.png", "id":2},{"name":"Tourteau","img": "../assets/tourteau.png", "id":3},{"name":"Recette","img": "../assets/poulpe.png", "id":4}];
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onRecetteClick(item): void {
    console.log(item);
    this.router.navigate(['/', 'recette', item.id]);

  }


}