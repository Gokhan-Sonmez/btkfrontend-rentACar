import { BrandService } from './../../../services/brand.service';
import { ColorService } from './../../../services/color.service';
import { BrandListModel } from './../../../models/brandListModel';
import { ColorListModel } from './../../../models/colorListModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {

  colorListFilter=0;
  brandListFilter=0;
  colors: ColorListModel[] = [];
  brands: BrandListModel[] = [];
  constructor( private colorService: ColorService,
    private brandService: BrandService) { }

  ngOnInit(): void {
    this.getColors();
    this.getBrands();

  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  
  selectedColor(colorId: number) {
    if (this.colorListFilter===colorId) {
      return true
    } else {
      return false
    }
  }
  selectedBrand(brandId: number) {
    if (this.brandListFilter === brandId) {
      return true
    } else {
      return false
    }
  }

}
