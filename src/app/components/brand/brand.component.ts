import { BrandListModel } from './../../models/brandListModel';
import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  title = 'Brand List';
  brands:BrandListModel[] = [];
  dataLoaded: boolean = false;
  currentBrand: BrandListModel;
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrand()
  }

  getBrand(){
    this.brandService.getBrands().subscribe(response =>{
      this.dataLoaded = false;
      this.brands = response.data;
      this.dataLoaded = true;
    })
  }

  setCurrentBrand(brand: BrandListModel) {
    this.currentBrand = brand;
  }
  getBrandClass(brand: BrandListModel) {
    if (brand == this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  getAllBrandClass() {
    if (!this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

}
