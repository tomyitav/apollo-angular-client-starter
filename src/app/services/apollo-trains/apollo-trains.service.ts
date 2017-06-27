import {Injectable} from "@angular/core";
import "rxjs/add/observable/of";
import {Apollo} from "apollo-angular";
import gql from "graphql-tag";

@Injectable()
export class ApolloTrainsService {

  private apollo: Apollo;
  clientAddSubscription;
  clientUpdateSubscription;
  clientDeleteSubscription;
  constructor(apollo: Apollo) {
    this.apollo= apollo;
  }

  getAllTrains(): any {
    return this.apollo.query({
      query: gql`
        query train{
          train {
            _id
            name
            speed
            diesel
          }
        }`,
      fetchPolicy: 'network-only'
    })
  }

  addTrain(name, speed, diesel) {
    let quatedName = '"' + name + '"';
    // let quatedSpeed = '"' + speed + '"';
    // let quatedDiesel = '"' + diesel + '"';
    return this.apollo.mutate({
      mutation: gql`
        mutation addTrain{
          addTrain(name : ${quatedName}, speed : ${speed}, diesel : ${diesel}){
            _id
            name
            speed
            diesel
          }
        }`
    });
  }

}
