import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import {BuchungComponent } from './buchung/buchung.component';
import {KundeComponent } from './kunde/kunde.component';
import {SpielraumComponent } from './spielraum/spielraum.component';

@NgModule({
  declarations: [
    AppComponent,
   // TestComponent,
    HomeComponent,
    BuchungComponent,
    KundeComponent,
    SpielraumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
