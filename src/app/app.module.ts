import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CarouselSectionComponent } from './components/carousel-section/carousel-section.component';
import { SportCardComponent } from './components/sport-card/sport-card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlCarouselComponent } from './components/owl-carousel/owl-carousel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllMensComponent } from './components/all-mens/all-mens.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { register } from 'swiper/element/bundle';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminProductlistComponent } from './components/admin-productlist/admin-productlist.component';
import { AdminProductaddComponent } from './components/admin-productadd/admin-productadd.component';
import { AdminEditproComponent } from './components/admin-editpro/admin-editpro.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

register();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    CarouselSectionComponent,
    SportCardComponent,
    OwlCarouselComponent,
    AllMensComponent,
    CartComponent,
    ProductViewComponent,
    AdminLoginComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminProductlistComponent,
    AdminProductaddComponent,
    AdminEditproComponent,
    AdminHomeComponent,
    WishListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
