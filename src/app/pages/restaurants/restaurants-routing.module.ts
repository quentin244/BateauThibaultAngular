import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantPage } from './restaurants.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantPageRoutingModule {}
