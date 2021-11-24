import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSandwichComponent } from './all-sandwich.component';

describe('AllSandwichComponent', () => {
  let component: AllSandwichComponent;
  let fixture: ComponentFixture<AllSandwichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSandwichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSandwichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
