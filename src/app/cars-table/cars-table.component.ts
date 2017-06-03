import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css']
})
export class CarsTableComponent implements OnInit {

  @Input() cars;
  selectedCar;
  showForm = false;
  @Output() showedChange = new EventEmitter();
  @Output() selectedChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  showEditForm(car) {
    this.selected = car;
    this.showed = true;
  }

  @Input()
  get showed() {
    return this.showForm;
  }

  set showed(val) {
    this.showForm= val;
    this.showedChange.emit(this.showForm);
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
