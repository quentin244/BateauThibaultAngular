import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../../services/getData.service'

@Component({
  selector: 'app-bateau',
  templateUrl: './bateau.page.html',
  styleUrls: ['./bateau.page.scss'],
})
export class BateauPage implements OnInit {
  @Input() bateaux;
  
  constructor(private router: Router, private data: GetDataService) { }

  ngOnInit() {
    this.data.getBateaux().subscribe(
      (resp)=>{
        this.bateaux = resp;
      }
    )
  }

  onBateauClick(item): void {
    console.log(item);
    if(item.id == 4){
      this.router.navigate(['/', 'contact'])
    }
    this.router.navigate(['/', 'bateau', item.id]);
  }
}
