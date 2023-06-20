import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbodyComponent } from './loginbody.component';

describe('LoginbodyComponent', () => {
  let component: LoginbodyComponent;
  let fixture: ComponentFixture<LoginbodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginbodyComponent]
    });
    fixture = TestBed.createComponent(LoginbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
