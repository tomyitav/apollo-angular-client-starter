import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule} from "@angular/material";
import {ApolloModule} from "apollo-angular";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ApolloCarsService} from "./apollo-cars.service";
import {getClient} from "./graphql.client";
import "hammerjs";
import {AppComponent} from "./app.component";
import {CarsComponent} from "./cars/cars.component";
import { TransportToolbarComponent } from './transport-toolbar/transport-toolbar.component';
import { RouterModule } from '@angular/router';
import { FormShowerComponent } from './form-shower/form-shower.component'

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    TransportToolbarComponent,
    FormShowerComponent
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
    ApolloModule.withClient(getClient),
    FlexLayoutModule,
    RouterModule.forRoot([
      {
        path: '',
        component: CarsComponent
      },
      {
        path: 'cars',
        component: CarsComponent
      }
    ])
  ],
  providers: [ApolloCarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
