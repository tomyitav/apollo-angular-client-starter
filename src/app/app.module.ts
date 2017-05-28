import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MdButtonModule,  MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule} from '@angular/material'
import { ApolloModule } from 'angular2-apollo';
import {FlexLayoutModule} from "@angular/flex-layout";
import {ApolloCarsService} from './apollo-cars.service'
// import { client } from  "./graphql.client";

import 'hammerjs'

import { AppComponent } from './app.component';
import { TomCardComponent } from './tom-card/tom-card.component';
import { CarsComponent } from './cars/cars.component';

@NgModule({
  declarations: [
    AppComponent,
    TomCardComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    ApolloModule,
    FlexLayoutModule
  ],
  providers: [ApolloCarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
