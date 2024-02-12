import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactPageModule)
  },
  {
    path: 'bateau',
    loadChildren: () =>
      import('./pages/bateau/bateau.module').then((m) => m.BateauPageModule)
  },
  {
    path: 'bateau-page/:id',
    loadChildren: () =>
      import('./pages/bateau-page/bateau-page.module').then(
        (m) => m.BateauPagePageModule
      )
  },
  {
    path: 'recette',
    loadChildren: () =>
      import('./pages/recette/recette.module').then((m) => m.RecettePageModule)
  },
  {
    path: 'recette-page/:id',
    loadChildren: () =>
      import('./pages/recette-page/recette-page.module').then(
        (m) => m.RecettePagePageModule
      )
  },
  {
    path: 'restaurants',
    loadChildren: () =>
      import('./pages/restaurants/restaurants.module').then(
        (m) => m.RestaurantsPageModule
      )
  },
  {
    path: 'restaurant/:id',
    loadChildren: () =>
      import('./pages/restaurant/restaurant.module').then(
        (m) => m.RestaurantPageModule
      )
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products/products.module').then(
        (m) => m.ProductsPageModule
      )
  },
  {
    path: 'products/:id',
    loadChildren: () =>
      import('./pages/products/products.module').then(
        (m) => m.ProductsPageModule
      )
  },
  {
    path: 'product-list/:id',
    loadChildren: () =>
      import('./pages/product-list/product-list.module').then(
        (m) => m.ProductListPageModule
      )
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./pages/cart/cart.module').then((m) => m.CartPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
