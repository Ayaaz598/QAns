import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main3bodyComponent } from './main3body.component';

describe('Main3bodyComponent', () => {
  let component: Main3bodyComponent;
  let fixture: ComponentFixture<Main3bodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Main3bodyComponent]
    });
    fixture = TestBed.createComponent(Main3bodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
