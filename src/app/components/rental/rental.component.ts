import { SingleResponseModel } from './../../models/singleResponseModel';
import { AdditionalServiceService } from './../../services/additional-service.service';
import { CreateAdditionalServiceModel } from './../../models/createAdditionalServiceRequestModel';
import { AdditionalServiceItemListModel } from './../../models/additionalServiceItemListModel';
import { AdditionalServiceItemService } from './../../services/additional-service-item.service';
import { PromoCodeService } from './../../services/promo-code.service';
import { PromoCodeListModel } from './../../models/promoCodeListModel';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RentalService } from './../../services/rental.service';
import { RentalListModel } from './../../models/rentalListModel';
import { CarService } from './../../services/car.service';
import { IndividualCustomerModel } from './../../models/individualCustomerModel';
import { CarListModel } from './../../models/carListModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  title = 'Rentals Detail List';
  car: CarListModel;
  cars: CarListModel[] = [];
  carId: number;
  additionalServiceItems: AdditionalServiceItemListModel[] = [];
  additionalServiceItemBasket: CreateAdditionalServiceModel[] = [];
  addLoading = false;
  activeRental: RentalListModel;
  returnDate: Date;

  status: string = 'rental';
  promoCode: PromoCodeListModel;
  constructor(
    private promoCodeService: PromoCodeService,
    private carService: CarService,
    private rentalService: RentalService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private additionalServiceService: AdditionalServiceService,
    private additionalServiceItemService: AdditionalServiceItemService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['carId']);
      this.getCarById(params['carId']);
    });
    this.carId = parseInt(this.activatedRoute.snapshot.paramMap.get('carId'));
    this.getAdditionalServiceItems();
  }

  rentalAddForm = new FormGroup({
    rentDate: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]),
    returnDate: new FormControl('', [Validators.required]),
  });
  clearRentalAddForm() {
    this.rentalAddForm.patchValue({
      rentDate: '',
      returnDate: '',
    });
  }

  promoCodeForm = new FormGroup({
    code: new FormControl('', [Validators.maxLength(30)]),
  });

  additionalServiceAddForm = new FormGroup({
    additionalServiceitem: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]),
  });

  addRental() {
    if (this.rentalAddForm.valid) {
      let rentalModel = Object.assign({}, this.rentalAddForm.value);

      rentalModel.customerId = 1;
      if (this.promoCode == null) {
        rentalModel.promoCodeId = 7;
      }
      rentalModel.promoCodeId = this.promoCode.id;
      rentalModel.carId = this.carId;
      console.log(rentalModel);
      this.rentalService
        .addRentalforindividiualcustomer(rentalModel)
        .subscribe((response) => {
          this.returnDate = this.rentalAddForm.get('returnDate').value;
       
          this.addLoading = false;
          this.status = 'service';
          this.getRentalCarById(this.carId);
          console.log(rentalModel)
        });
    }
  }

  getPromoCodeByCode(code: string) {
    this.promoCodeService.getByCode(code).subscribe((response) => {
      if (response.success) {
        console.log(response.data);
        this.promoCode = response.data;
      }
    });
  }

  getCarById(carId: number) {
    this.carService.getCarsById(carId).subscribe((response) => {
      this.car = response.data;

      //console.log(this.car)
    });
  }


  getRentalCarById(carId: number) {
    this.rentalService.getRentalCarById(carId).subscribe((response) => {
      this.activeRental = response.data;

      console.log(this.activeRental)
    });
  }

  getAdditionalServiceItems() {
    this.additionalServiceItemService.getAll().subscribe((response) => {
      this.additionalServiceItems = response.data;

      console.log(this.additionalServiceItems);
    });
  }
  addAdditionalServices() {
    if (this.additionalServiceItemBasket.length < 1) {
      this.status = 'payment';

      return;
    }
    this.additionalServiceService
      .add(this.additionalServiceItemBasket)
      .subscribe((response) => {
        if (response.success) {
          this.status = 'payment';
        }
      });
  }

  getRentalById(id: number) {
    this.rentalService
      .getRentalById(id)
      .subscribe((response: SingleResponseModel<RentalListModel>) => {
        this.activeRental = response.data;
        // this.toastrService.success(response.message,"Başarılı");
      });
  }

  addAdditionalServiceItem(id: number) {
    const model: CreateAdditionalServiceModel = {
      rentalId: this.activeRental.id,
      additionalServiceItemId: id,
    };

    this.additionalServiceItemBasket.push(model);
  }
  removeAdditionalServiceItem(id: number) {
    this.additionalServiceItemBasket = this.additionalServiceItemBasket.filter(
      (model) => model.additionalServiceItemId !== id
    );
  }

  isBasketContainItem(id: number): boolean {
    if (
      this.additionalServiceItemBasket.filter(
        (e) => e.additionalServiceItemId === id
      ).length > 0
    ) {
      return true;
    } else return false;
  }

  /* calculateTotalPrice(){
    const model: TotalPriceRequestModel= {rentalId:this.activeRental.id,returnDate:this.rentalAddForm.get('returnDate').value}
      
      this.paymentService.calculateTotalPrice(model).subscribe(response =>{
        if(response.success){
       
          this.totalPrice=response.data;
        }
    
      }, 
      )
     }*/
}
