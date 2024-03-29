import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecettePage } from './recette.page';

const routes: Routes = [
  {
    path: '',
    component: RecettePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecettePageRoutingModule {}
