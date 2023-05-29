import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemotestComponent } from './demotest.component';

describe('DemotestComponent', () => {
  let component: DemotestComponent;
  let fixture: ComponentFixture<DemotestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemotestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
