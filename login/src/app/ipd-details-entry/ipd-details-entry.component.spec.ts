import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpdDetailsEntryComponent } from './ipd-details-entry.component';

describe('IpdDetailsEntryComponent', () => {
  let component: IpdDetailsEntryComponent;
  let fixture: ComponentFixture<IpdDetailsEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpdDetailsEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpdDetailsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
