import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations" 
import{ToastrModule} from "ngx-toastr";


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
import { PromoCodeComponent } from './components/promo-code/promo-code.component';
import { PromoCodeAddComponent } from './components/promo-code/promo-code-add/promo-code-add.component';




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
    CarFilterComponent,
    PromoCodeComponent,
    PromoCodeAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
   
    ToastrModule.forRoot({
      positionClass:"toast-top-right"
    }),
  ],
  providers:[] ,
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
