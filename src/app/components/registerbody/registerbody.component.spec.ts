import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterbodyComponent } from './registerbody.component';

describe('RegisterbodyComponent', () => {
  let component: RegisterbodyComponent;
  let fixture: ComponentFixture<RegisterbodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterbodyComponent]
    });
    fixture = TestBed.createComponent(RegisterbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
