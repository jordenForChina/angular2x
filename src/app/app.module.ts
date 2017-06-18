import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContackComponent } from './contack/contack.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRouteModule } from './app-route/app-route.module'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContackComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
