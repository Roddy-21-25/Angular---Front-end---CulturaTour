import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRootComponent } from './contact-root.component';

describe('ContactRootComponent', () => {
  let component: ContactRootComponent;
  let fixture: ComponentFixture<ContactRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactRootComponent]
    });
    fixture = TestBed.createComponent(ContactRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
