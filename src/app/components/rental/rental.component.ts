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
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  title = 'Rentals Detail List';
  cars:CarListModel[]=[];
  carId:number;
  customers: IndividualCustomerModel[]=[];
  customerId:any;
  addLoading=false;
  activeRental:RentalListModel 
  returnDate:Date;
  totalPrice:number;
  isCardDetailSaved=false;
  paymentLoading=false;
  status:string='rental';
  promoCode: PromoCodeListModel;
  constructor(
    private promoCodeService:PromoCodeService,
    private carService: CarService,
    private rentalService:RentalService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
   

 
  ) { }

  ngOnInit(): void {

    
  }

  rentalAddForm = new FormGroup({
    rentDate: new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(30)]),
    returnDate: new FormControl("",[Validators.required,]),
  })
  clearRentalAddForm() {
    this.rentalAddForm.patchValue({
      rentDate: '',
      returnDate:'',
    });
  }

  promoCodeForm = new FormGroup({
    code: new FormControl("",[Validators.maxLength(30)])
  })

  additionalServiceAddForm = new FormGroup({
    additionalServiceitem: new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(30)]),
  })


 

  addRental() {
    if (this.rentalAddForm.valid) {
      let rentalModel = Object.assign({}, this.rentalAddForm.value);
   
     this.rentalService.addRentalforindividiualcustomer(rentalModel).subscribe(response =>{
     
    }
    )
   
  }}

  getPromoCodeByCode (code:string){
    this.promoCodeService.getByCode(code).subscribe(response =>{
      if(response.success){
        console.log(response.data)
        this.promoCode=response.data;
       
        
      }
    }
    )

  }
  

}
