import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalDoSignupPage } from './pal-do-signup.page';

describe('PalDoSignupPage', () => {
  let component: PalDoSignupPage;
  let fixture: ComponentFixture<PalDoSignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalDoSignupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalDoSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
