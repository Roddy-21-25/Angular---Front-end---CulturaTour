import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelGuideHeaderComponent } from './travel-guide-header.component';

describe('TravelGuideHeaderComponent', () => {
  let component: TravelGuideHeaderComponent;
  let fixture: ComponentFixture<TravelGuideHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelGuideHeaderComponent]
    });
    fixture = TestBed.createComponent(TravelGuideHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
