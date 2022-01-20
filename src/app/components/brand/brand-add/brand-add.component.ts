import { BrandService } from 'src/app/services/brand.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrandListModel } from 'src/app/models/brandListModel';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css'],
})
export class BrandAddComponent implements OnInit {
  brands: BrandListModel[];
  brandAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createBrandAddForm();
    this.getBrands();
  }

  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  addBrand() {
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value);

      this.brandService.addBrand(brandModel).subscribe(
        (response) => {
          setTimeout(function () {
            location.reload();
          }, 100);
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {}
          }
        }
      );
    }
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  deleteBrand(brand: BrandListModel) {
    this.brandService.deleteBrand(brand).subscribe((response) => {
      setTimeout(function () {
        location.reload();
      }, 100);
    });
  }

  updateBrand(brand: BrandListModel) {
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value);
      brandModel.brandId = brand.id;
      this.brandService.updateBrand(brandModel).subscribe(
        (response) => {
          setTimeout(function () {
            location.reload();
          }, 100);
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
          }
        }
      );
    } else {
    }
    setTimeout(function () {
      location.reload();
    }, 100);
  }
}
