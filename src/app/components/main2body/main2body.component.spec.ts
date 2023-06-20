import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main2bodyComponent } from './main2body.component';

describe('Main2bodyComponent', () => {
  let component: Main2bodyComponent;
  let fixture: ComponentFixture<Main2bodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Main2bodyComponent]
    });
    fixture = TestBed.createComponent(Main2bodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
