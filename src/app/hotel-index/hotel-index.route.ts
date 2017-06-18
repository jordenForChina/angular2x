import { Routes } from '@angular/router';

import { HotelIndexComponent } from './hotel-index/hotel-index.component';

export const IndexRoutes:Routes = [
    {
        path:'',
        redirectTo:'hotelIndex',
        pathMatch:'full'
    },
    {
        path:'hotelIndex',
        component:HotelIndexComponent
    }
]