import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bateau',
  templateUrl: './bateau.page.html',
  styleUrls: ['./bateau.page.scss'],
})
export class BateauPage implements OnInit {
  @Input() bateaux = [{"name":"De la Brise"},{"name":"Saphir"},{"name":"Gast Micher"},{"name":"Aquilon"}];
  
  constructor() { }

  ngOnInit() {
  }

  onBateauClick(item): void {
    console.log(item);
  }


}
