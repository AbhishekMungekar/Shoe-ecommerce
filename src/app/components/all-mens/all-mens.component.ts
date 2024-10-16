import { Component, Input } from '@angular/core';
import { ShoesDataService } from 'src/app/Service/shoes-data.service';

@Component({
  selector: 'app-all-mens',
  templateUrl: './all-mens.component.html',
  styleUrls: ['./all-mens.component.css'],
})
export class AllMensComponent {
  getShoesData: any[] = [];

  constructor(public shoesData: ShoesDataService) {}

  ngOnInit() {
    this.getShoesData = this.shoesData.allShoes;
  }
}
