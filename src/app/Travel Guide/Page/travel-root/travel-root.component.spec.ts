import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelRootComponent } from './travel-root.component';

describe('TravelRootComponent', () => {
  let component: TravelRootComponent;
  let fixture: ComponentFixture<TravelRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelRootComponent]
    });
    fixture = TestBed.createComponent(TravelRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
