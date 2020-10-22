import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../../services/getData.service'

@Component({
  selector: 'app-recette',
  templateUrl: './recette.page.html',
  styleUrls: ['./recette.page.scss'],
})
export class RecettePage implements OnInit {
  @Input() recettes;
  
  constructor(private router: Router, private data: GetDataService) { }

  ngOnInit() {
    this.data.getRecettes().subscribe(
      (resp)=>{
        this.recettes = resp;
      }
    )
  }

  onRecetteClick(item): void {
    console.log(item);
    this.router.navigate(['/', 'recette', item.id]);

  }
}