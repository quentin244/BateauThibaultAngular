import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecettePagePage } from './recette-page.page';

const routes: Routes = [
  {
    path: '',
    component: RecettePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecettePagePageRoutingModule {}
