import { CarClassService } from './../../../services/car-class.service';
import { CarClassListModel } from './../../../models/carClassListModel';
import { CreateCarRequestModel } from './../../../models/createCarRequestModel';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from './../../../services/color.service';
import { CarService } from './../../../services/car.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColorListModel } from 'src/app/models/colorListModel';
import { BrandListModel } from 'src/app/models/brandListModel';
import { CarListModel } from './../../../models/carListModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  cars: CreateCarRequestModel[];
  carList: CarListModel[];
  brands: BrandListModel[];
  colors: ColorListModel[];
  carClasses: CarClassListModel[];
  carAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private colorService: ColorService,
    private brandService: BrandService,
    private carClassService: CarClassService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
    this.getColors();
    this.getBrands();
    this.getCars();
    this. getCarClases();
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      carClassId: ['', Validators.required],
      carName: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
      findeksScore: ['', Validators.required],
      minAge: ['', Validators.required],
    });
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
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.carList = response.data;
    });
  }
  getCarClases() {
    this.carClassService.getCarClasses().subscribe((response) => {
      this.carClasses = response.data;
    });
  }

  addCar() {
    if (this.carAddForm.valid) {
      let carModel = Object.assign({}, this.carAddForm.value);
      carModel.brandId = parseInt(carModel.brandId.toString());
      carModel.colorId = parseInt(carModel.colorId.toString());
      carModel.carClassId = parseInt(carModel.carClassId.toString());

      this.carService.addCar(carModel).subscribe((response) => {
        console.log(carModel);

        setTimeout(function () {
          location.reload();
        }, 100);
      });
    }
  }

  updateCar(carId:number) {
    if (this.carAddForm.valid) {
      let carModel = Object.assign({}, this.carAddForm.value);
      carModel.carId = carId;
      carModel.brandId = parseInt(carModel.brandId.toString());
      carModel.colorId = parseInt(carModel.colorId.toString());
      carModel.carClassId = parseInt(carModel.carClassId.toString());
      this.carService.updateCar(carModel).subscribe(
        (response) => {
         
          setTimeout(function () {
            location.reload();
          }, 100);
        },
      
      );
    } 
    setTimeout(function () {
      location.reload();
    }, 100);
   
  }

   //deleteCar(carId:number) {
    // this.carService.deleteCar().subscribe((response) => {
      
   //  });
   // setTimeout(function () {
   //   location.reload();
  //  }, 100);
   
  }

