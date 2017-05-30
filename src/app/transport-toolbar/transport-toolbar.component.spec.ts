import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportToolbarComponent } from './transport-toolbar.component';

describe('TransportToolbarComponent', () => {
  let component: TransportToolbarComponent;
  let fixture: ComponentFixture<TransportToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
