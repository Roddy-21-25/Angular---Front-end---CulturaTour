import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundRootComponent } from './not-found-root.component';

describe('NotFoundRootComponent', () => {
  let component: NotFoundRootComponent;
  let fixture: ComponentFixture<NotFoundRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundRootComponent]
    });
    fixture = TestBed.createComponent(NotFoundRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
