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
    this.startSubscriptions();
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

  startSubscriptions() {
    this.subscribeToUpdates();
    this.subscribeToAdds();
    this.subscribeToDeletes();
  }

  subscribeToUpdates() {
    this.apolloCars.subscribeToUpdates()
      .subscribe({
        next: data => {
          console.log('Got data- ', data);
          console.log('Pushing to car list...');
        },
        error: (err) => {
          console.log('Error- ', err);
        }
      })
  }
  subscribeToAdds() {
    this.apolloCars.subscribeToAdds()
      .subscribe({
        next: data => {
          console.log('Got data- ', data);
          console.log('Added to car list...');
        },
        error: (err) => {
          console.log('Error- ', err);
        }
      })
  }
  subscribeToDeletes() {
    this.apolloCars.subscribeToDeletes()
      .subscribe({
        next: data => {
          console.log('Got data- ', data);
          console.log('Removing from cars list...');
          console.log(data.carDeleted);
        },
        error: (err) => {
          console.log('Error- ', err);
        }
      })
  }

}
