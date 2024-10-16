import { Component } from '@angular/core';
import { ShoesDataService } from 'src/app/Service/shoes-data.service';

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.css'],
})
export class OwlCarouselComponent {
  constructor(public shoesData : ShoesDataService){}
  // all: boolean = true;
  adi: boolean = true;
  nik: boolean = false;
  nb: boolean = false;



  // allshoes() {}
  adidasSection() {
    this.adi = true;
    this.nik =false;
    this.nb=false
  }
  nikeSection() {
    this.adi = false;
    this.nik =true;
    this.nb=false;
  }
  nbSection() {
    this.adi = false;
    this.nik =false;
    this.nb=true;
  }
}
