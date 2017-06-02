import {Component, OnInit} from "@angular/core";
import {ApolloCarsService} from "../apollo-cars.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars;
  selectedCar;
  formShown = false;
  constructor(private apolloCars: ApolloCarsService) {
    this.getCars();
  }

  ngOnInit() {

  }

  getCars() {
    this.apolloCars.getAllCars().map(data => data.data.car).subscribe(cars => {
        console.log('Got data: ', cars);
        this.cars = cars;
      }
    )
  }

  showEditForm(car) {
    console.log('Clicked linked');
    this.selectedCar = car;
    this.formShown = true;
  }

}
