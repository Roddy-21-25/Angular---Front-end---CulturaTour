import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisionVisionComponent } from './mision-vision.component';

describe('MisionVisionComponent', () => {
  let component: MisionVisionComponent;
  let fixture: ComponentFixture<MisionVisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisionVisionComponent]
    });
    fixture = TestBed.createComponent(MisionVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
