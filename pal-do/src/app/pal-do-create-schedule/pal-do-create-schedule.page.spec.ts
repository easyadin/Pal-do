import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalDoCreateSchedulePage } from './pal-do-create-schedule.page';

describe('PalDoCreateSchedulePage', () => {
  let component: PalDoCreateSchedulePage;
  let fixture: ComponentFixture<PalDoCreateSchedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalDoCreateSchedulePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalDoCreateSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
