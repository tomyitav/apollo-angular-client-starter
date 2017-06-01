import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-shower',
  templateUrl: './form-shower.component.html',
  styleUrls: ['./form-shower.component.css']
})
export class FormShowerComponent{

  showForm = false;
  @Output() showedChange = new EventEmitter();

  @Input()
  get showed() {
    return this.showForm;
  }

  set showed(val) {
    this.showForm= val;
    this.showedChange.emit(this.showForm);
  }

  toggleForm() {
    this.showed = !this.showed;
  }
}
