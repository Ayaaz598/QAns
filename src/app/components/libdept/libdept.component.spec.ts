import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibdeptComponent } from './libdept.component';

describe('LibdeptComponent', () => {
  let component: LibdeptComponent;
  let fixture: ComponentFixture<LibdeptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibdeptComponent]
    });
    fixture = TestBed.createComponent(LibdeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
