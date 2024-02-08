import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/getData.service';
import { Recipe } from '../../dto/Recipe';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.page.html',
  styleUrls: ['./recette.page.scss']
})
export class RecettePage implements OnInit {
  protected recettes: Recipe[];

  constructor(
    private router: Router,
    private getDataService: GetDataService
  ) {}

  ngOnInit() {
    this.getDataService.getRecettes().subscribe((resp) => {
      this.recettes = resp;
    });
  }

  onRecetteClick(item: Recipe): void {
    this.router.navigate(['/', 'recette-page', item.id]);
  }
}
