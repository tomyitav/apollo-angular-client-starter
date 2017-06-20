import {TestBed, inject} from "@angular/core/testing";
import {ApolloCarsService} from "./apollo-cars.service";

describe('ApolloCarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApolloCarsService]
    });
  });

  it('should be created', inject([ApolloCarsService], (service: ApolloCarsService) => {
    expect(service).toBeTruthy();
  }));
});
