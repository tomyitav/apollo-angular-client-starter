import { Component, OnInit, Input } from '@angular/core';
import {ApolloCarsService} from "../apollo-cars.service";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  @Input() oldCar;
  constructor(private apolloCars: ApolloCarsService) { }

  ngOnInit() {
  }

  onSubmit(car) {
    console.log('Logging form ', car);
    console.log('Logging old ', this.oldCar.name);
    this.apolloCars.editCar(this.oldCar.name, car);
  }

}
