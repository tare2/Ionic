import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressChequesPage } from './progress-cheques.page';

describe('ProgressChequesPage', () => {
  let component: ProgressChequesPage;
  let fixture: ComponentFixture<ProgressChequesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressChequesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressChequesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
