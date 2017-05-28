import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomCardComponent } from './tom-card.component';

describe('TomCardComponent', () => {
  let component: TomCardComponent;
  let fixture: ComponentFixture<TomCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
