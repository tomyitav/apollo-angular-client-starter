import {Component, OnInit} from "@angular/core";
import {ApolloTrainsService} from "../services/apollo-trains/apollo-trains.service";

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {

  readonly addText = 'Add ';
  readonly editText = 'Edit ';
  trains;
  selectedTrain;
  editModeText = this.addText;
  formShown = false;
  constructor(private apolloTrain: ApolloTrainsService) {
    this.getTrains();
    // this.startSubscriptions();
  }

  ngOnInit() {
  }

  getTrains() {
    this.apolloTrain.getAllTrains().subscribe(trains => {
      console.log('got trains: ', trains);
      this.trains = trains;
    })
  }

}
