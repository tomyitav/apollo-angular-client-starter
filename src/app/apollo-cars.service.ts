import {Injectable} from "@angular/core";
import gql from "graphql-tag";
import {Apollo} from "apollo-angular";

@Injectable()
export class ApolloCarsService {

  private apollo: Apollo;
  constructor(apollo: Apollo) {
    this.apollo= apollo;
  }

  getAllCars(): any {
    return this.apollo.query({
      query: gql`
        query car{
          car{
            _id
            name
          }
        }`
    });
  }



}
