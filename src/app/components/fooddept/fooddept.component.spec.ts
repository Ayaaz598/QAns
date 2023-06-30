import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooddeptComponent } from './fooddept.component';

describe('FooddeptComponent', () => {
  let component: FooddeptComponent;
  let fixture: ComponentFixture<FooddeptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooddeptComponent]
    });
    fixture = TestBed.createComponent(FooddeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
