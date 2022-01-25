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
  }

  createpromoCodeAddForm() {
    this.promoCodeAddForm = this.formBuilder.group({
      code: ['', Validators.required],
      discountRate: ['', Validators.required],
      startDate: ['', Validators.required],
      finishDate: ['', Validators.required],
    });
  }

}
