import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoundHomePage } from './secound-home.page';

describe('SecoundHomePage', () => {
  let component: SecoundHomePage;
  let fixture: ComponentFixture<SecoundHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecoundHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecoundHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
