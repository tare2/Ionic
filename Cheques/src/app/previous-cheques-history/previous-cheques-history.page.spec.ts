import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousChequesHistoryPage } from './previous-cheques-history.page';

describe('PreviousChequesHistoryPage', () => {
  let component: PreviousChequesHistoryPage;
  let fixture: ComponentFixture<PreviousChequesHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousChequesHistoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousChequesHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
