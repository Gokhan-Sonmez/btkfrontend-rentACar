import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations" 
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car/car-detail/car-detail.component';
import { RentalComponent } from './components/rental/rental.component';
import { CityComponent } from './components/city/city.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { CarFilterComponent } from './components/car/car-filter/car-filter.component';




@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CarDetailComponent,
    RentalComponent,
    CityComponent,
    NaviComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    CarFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
   

    
   
  ],
  providers:[DatePipe] ,
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
