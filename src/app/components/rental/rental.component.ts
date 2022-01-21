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
  car: CarListModel;
  customers: IndividualCustomerModel[]=[];
  cars:CarListModel[]=[];
  userId:number;

 // rental: Rental = new Rental();
  rentDate: Date;
  returnDate: Date;
  customerId: number;
  rentable: boolean = true;;
  firstDateSelected: boolean = false;
  minDate: string | null;
  maxDate: string | null;
  findex:boolean;
  constructor(
  
    private carService: CarService,
    private activatedRoute: ActivatedRoute,

    private router: Router,
 
  ) { }

  ngOnInit(): void {
  }

  setFindeks(){
    
  }

  checkFindeks(carId:number,customerId:number){


  }
  onChangeEvent(event: any) {
    this.minDate = event.target.value;
    this.firstDateSelected = true;
  }

  addRental() {
    let RentalModel = {
      customerId: this.customerId,
      carId: this.car.id,
      rentDate: this.rentDate,
      returnDate: this.returnDate,
      status: !this.rentable
    }
    
 
      this.router.navigate(['/cars/rental/payment/', JSON.stringify(RentalModel)]);
      //this.router.navigate(['cars/rental/payment/', JSON.stringify(CarModel)]);
     // this.router.navigate(['cars/rental/payment/', JSON.stringify(CustomerModel)]);
     
   
  }
  

}
