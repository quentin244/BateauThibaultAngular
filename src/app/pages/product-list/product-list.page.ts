import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GetDataService } from 'src/app/services/getData.service';
import { Storage } from '@ionic/storage'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  private products;
  private category;
  public ok = false;

  constructor(
    private getDataService: GetDataService,
    private route: ActivatedRoute,
    private router: Router,
    private storage: Storage
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['id'];
    });

    this.getDataService.getProducts()
    .subscribe(
      (resp)=>{
        this.products = resp
      }
    );
  }

  addCart(item): void {
    console.log("vous avez ajouter un " + item);
    if (this.ok == true){
      this.ok = false;
    }
    else{
      this.ok = true;
    }
    this.storage.set(item.name, item);
  }

  toNavigateHome(){
    this.router.navigate(['/', 'home']);
  }
  toNavigateCart(){
    this.router.navigate(['/', 'cart']);
  }
}
