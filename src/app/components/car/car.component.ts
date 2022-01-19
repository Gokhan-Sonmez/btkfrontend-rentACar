import { CarService } from './../../services/car.service';
import { CarListModel } from './../../models/carListModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  title = 'Cars Detail List';
  cars:CarListModel[] = []
  dataLoaded: boolean = false
  filterText = '';
  constructor(
    private carService:CarService,
    private activetedRoute: ActivatedRoute,) { }

  ngOnInit(): void {

    this.activetedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.getCarsBySelect(params['brandId'], params['colorId']);
      } else if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else {
        this.getCar()
      }
    });
    
  }

  getCar(){
    this.carService.getCars().subscribe(response =>{
      this.dataLoaded = false;
      this.cars = response.data;
      this.dataLoaded = true;
    })

}

getCarsByBrand(brandId: number) {
  this.carService.getCarsByBrand(brandId).subscribe((response) => {
    this.cars = response.data;
    this.dataLoaded = true;
  });
}
getCarsByColor(colorId: number) {
  this.carService.getCarsByColor(colorId).subscribe((response) => {
    this.cars = response.data;
    this.dataLoaded = true;
  });
}
getCarsBySelect(brandId: number, colorId: number) {
  this.carService.getCarsBySelect(brandId, colorId).subscribe((response) => {
    this.cars = response.data;
    this.dataLoaded = true;
    if (this.cars.length == 0) {
     
    }
  });

}
}
