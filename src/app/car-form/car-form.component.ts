import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {ApolloCarsService} from "../apollo-cars.service";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  selectedCar;
  @Output() selectedChange = new EventEmitter();
  constructor(private apolloCars: ApolloCarsService) { }

  ngOnInit() {
  }

  onSubmit(car) {
    console.log('Logging form ', car);
    console.log('Logging old ', this.selectedCar.name);
    this.apolloCars.editCar(this.selectedCar.name, car);
    this.selected = car;
  }

  @Input()
  get selected() {
    return this.selectedCar;
  }

  set selected(val) {
    this.selectedCar= val;
    this.selectedChange.emit(this.selectedCar);
  }

}
