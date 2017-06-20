import {TestBed, inject} from "@angular/core/testing";
import {ApolloTrainsService} from "./apollo-trains.service";

describe('ApolloTrainsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApolloTrainsService]
    });
  });

  it('should be created', inject([ApolloTrainsService], (service: ApolloTrainsService) => {
    expect(service).toBeTruthy();
  }));
});
