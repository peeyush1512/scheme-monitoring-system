import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeEntryComponent } from './scheme-entry.component';

describe('SchemeEntryComponent', () => {
  let component: SchemeEntryComponent;
  let fixture: ComponentFixture<SchemeEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemeEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
