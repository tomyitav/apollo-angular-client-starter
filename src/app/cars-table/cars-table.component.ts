import {Component, OnInit, Input} from "@angular/core";

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css']
})
export class CarsTableComponent implements OnInit {

  @Input() cars;
  constructor() { }

  ngOnInit() {
  }

}
