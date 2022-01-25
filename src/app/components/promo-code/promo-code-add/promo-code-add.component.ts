import { PromoCodeListModel } from './../../../models/promoCodeListModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PromoCodeService } from 'src/app/services/promo-code.service';

@Component({
  selector: 'app-promo-code-add',
  templateUrl: './promo-code-add.component.html',
  styleUrls: ['./promo-code-add.component.css']
})
export class PromoCodeAddComponent implements OnInit {
  promoCodes: PromoCodeListModel[];
  promoCodeAddForm: FormGroup;
  constructor(

    private formBuilder: FormBuilder,
    private promoCodeService:PromoCodeService

  ) {}

  ngOnInit(): void {
    this.createpromoCodeAddForm();
    this.getPromoCodes();

  }

  createpromoCodeAddForm() {
    this.promoCodeAddForm = this.formBuilder.group({
      code: ['', Validators.required],
      discountRate: ['', Validators.required],
      startDate: ['', Validators.required],
      finishDate: ['', Validators.required],
    });
  }
  addPromoCode() {
    if (this.promoCodeAddForm.valid) {
      let promoCodeModel = Object.assign({}, this.promoCodeAddForm.value);

      this.promoCodeService.addPromoCode(promoCodeModel).subscribe(
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

  getPromoCodes() {
    this.promoCodeService.getPromocodes().subscribe((response) => {
      this.promoCodes = response.data;
    });
  }
  deletePromoCode(promoCodes: PromoCodeListModel) {
    this.promoCodeService.deletePromoCode(promoCodes).subscribe((response) => {
      setTimeout(function () {
        location.reload();
      }, 100);
    });
  }

  updatePromoCode(promoCode: PromoCodeListModel) {
    if (this.promoCodeAddForm.valid) {
      let promoCodeModel = Object.assign({}, this.promoCodeAddForm.value);
      promoCodeModel.id = promoCode.id;
      this.promoCodeService.updatePromoCode(promoCode).subscribe(
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

