import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { ContackComponent } from './../contack/contack.component';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';

const  appRoutes:Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'contack',
    component:ContackComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRouteModule { }
