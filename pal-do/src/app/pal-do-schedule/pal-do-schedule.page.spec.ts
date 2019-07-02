import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalDoSchedulePage } from './pal-do-schedule.page';

describe('PalDoSchedulePage', () => {
  let component: PalDoSchedulePage;
  let fixture: ComponentFixture<PalDoSchedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalDoSchedulePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalDoSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
