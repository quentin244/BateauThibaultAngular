import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bateau',
  templateUrl: './bateau.page.html',
  styleUrls: ['./bateau.page.scss'],
})
export class BateauPage implements OnInit {
  @Input() bateaux = [{"name":"De la Brise","img": "../assets/img/deLaBrise_icon.png", "id":0},{"name":"Saphir","img": "../assets/img/saphir_icon.png", "id":1},{"name":"Gast Micher","img": "../assets/img/gastMicher_icon.png", "id":2},{"name":"Aquilon","img": "../assets/img/aquilon_icon.png", "id":3},{"name":"Contact","img": "../assets/img/poulpe.png", "id":4}];
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBateauClick(item): void {
    console.log(item);
    if(item.id == 4){
      this.router.navigate(['/', 'contact'])
    }
    this.router.navigate(['/', 'bateau', item.id]);
  }
}
