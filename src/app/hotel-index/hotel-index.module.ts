import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { IndexRoutes } from './hotel-index.route';

import { HotelIndexComponent } from './hotel-index/hotel-index.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(IndexRoutes)
  ],
  declarations: [HotelIndexComponent]
})
export class HotelIndexModule { }
