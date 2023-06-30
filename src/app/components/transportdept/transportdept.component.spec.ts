import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportdeptComponent } from './transportdept.component';

describe('TransportdeptComponent', () => {
  let component: TransportdeptComponent;
  let fixture: ComponentFixture<TransportdeptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransportdeptComponent]
    });
    fixture = TestBed.createComponent(TransportdeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
