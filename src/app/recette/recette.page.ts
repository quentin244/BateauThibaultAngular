import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.page.html',
  styleUrls: ['./recette.page.scss'],
})
export class RecettePage implements OnInit {
  @Input() recettes = [{"name":"Homard"},{"name":"St Jaques"},{"name":"Bar"},{"name":"Tourteau"}];
  
  constructor() { }

  ngOnInit() {
  }

  onRecetteClick(item): void {
    console.log(item);
  }


}