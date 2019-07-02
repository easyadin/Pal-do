import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalDoLoginPage } from './pal-do-login.page';

describe('PalDoLoginPage', () => {
  let component: PalDoLoginPage;
  let fixture: ComponentFixture<PalDoLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalDoLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalDoLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
