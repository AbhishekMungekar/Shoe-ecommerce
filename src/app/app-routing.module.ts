import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselSectionComponent } from './components/carousel-section/carousel-section.component';
import { SportCardComponent } from './components/sport-card/sport-card.component';
import { OwlCarouselComponent } from './components/owl-carousel/owl-carousel.component';
import { AllMensComponent } from './components/all-mens/all-mens.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { adminGuardsGuard } from './guards/admin-guards.guard';
import { AdminProductlistComponent } from './components/admin-productlist/admin-productlist.component';
import { AdminProductaddComponent } from './components/admin-productadd/admin-productadd.component';
import { AdminEditproComponent } from './components/admin-editpro/admin-editpro.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { WishListComponent } from './components/wish-list/wish-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'carousel', component: CarouselSectionComponent },
  { path: 'sports-card', component: SportCardComponent },
  { path: 'owl-carousel', component: OwlCarouselComponent },
  { path: 'all-menshoes', component: AllMensComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product-view', component: ProductViewComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-header', component: AdminHeaderComponent },
  { path: 'admin-sidebar', component: AdminSidebarComponent },
  { path: 'wishlist', component: WishListComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [adminGuardsGuard],
    children: [
      { path: 'admin-home', component: AdminHomeComponent },
      {
        path: 'product-list',
        component: AdminProductlistComponent,
      },
      {
        path: 'product-add',
        component: AdminProductaddComponent,
      },
      { path: 'edit-pro/:id', component: AdminEditproComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
