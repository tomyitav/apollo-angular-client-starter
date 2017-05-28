import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tom-card',
  templateUrl: './tom-card.component.html',
  styleUrls: ['./tom-card.component.css']
  // inputs: ['data']
})
export class TomCardComponent implements OnInit {

  @Input() info;
  constructor() { }

  ngOnInit() {
  }

}
