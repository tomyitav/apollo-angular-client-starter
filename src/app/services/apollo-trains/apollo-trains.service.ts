import {Injectable} from "@angular/core";
import "rxjs/add/observable/of";
import {Observable} from "rxjs";

@Injectable()
export class ApolloTrainsService {

  constructor() { }

  getAllTrains(): any {
    let trains = [{
      _id : '1111',
      name: "first",
      speed : '100',
      diesel: true,
    }]
    return Observable.of(trains);
  }

}
