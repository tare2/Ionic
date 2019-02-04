import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequesPage } from './cheques.page';

describe('ChequesPage', () => {
  let component: ChequesPage;
  let fixture: ComponentFixture<ChequesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
