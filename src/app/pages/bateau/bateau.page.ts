import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bateau',
  templateUrl: './bateau.page.html',
  styleUrls: ['./bateau.page.scss'],
})
export class BateauPage implements OnInit {
  @Input() bateaux = [{"name":"De la Brise", "id":0},{"name":"Saphir", "id":1},{"name":"Gast Micher", "id":2},{"name":"Aquilon", "id":3}];
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBateauClick(item): void {
    console.log(item);
    this.router.navigate(['/', 'bateau', item.id]);
  }
}
