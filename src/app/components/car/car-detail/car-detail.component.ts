import { CarService } from './../../../services/car.service';
import { CarListModel } from './../../../models/carListModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car: CarListModel;
  dataLoaded = false;
  constructor(private carService: CarService,
    private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
       this.activetedRoute.params.subscribe((params) => {
        this.getCarById(params['carId']);
       
    });

  
    
  }

  getCarById(carId: number) {
    this.carService.getCarsById(carId).subscribe((response) => {
      this.dataLoaded = false;
      this.car = response.data;
      this.dataLoaded = true;
      console.log(this.car)
    });
  }
}
