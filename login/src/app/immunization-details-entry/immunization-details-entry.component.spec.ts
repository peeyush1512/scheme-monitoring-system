import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmunizationDetailsEntryComponent } from './immunization-details-entry.component';

describe('ImmunizationDetailsEntryComponent', () => {
  let component: ImmunizationDetailsEntryComponent;
  let fixture: ComponentFixture<ImmunizationDetailsEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmunizationDetailsEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImmunizationDetailsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
