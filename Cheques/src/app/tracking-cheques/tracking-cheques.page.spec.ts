import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingChequesPage } from './tracking-cheques.page';

describe('TrackingChequesPage', () => {
  let component: TrackingChequesPage;
  let fixture: ComponentFixture<TrackingChequesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingChequesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingChequesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
