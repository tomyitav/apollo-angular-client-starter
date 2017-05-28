import { Injectable } from '@angular/core';
import { client } from './graphql.client'
import 'rxjs/add/operator/toPromise';
import gql from 'graphql-tag';

@Injectable()
export class ApolloCarsService {

  client;
  constructor() {
    this.client = client;
  }

  getAllCars() {
    return this.client.query({
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
