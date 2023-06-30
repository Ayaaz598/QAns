import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosteldeptComponent } from './hosteldept.component';

describe('HosteldeptComponent', () => {
  let component: HosteldeptComponent;
  let fixture: ComponentFixture<HosteldeptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HosteldeptComponent]
    });
    fixture = TestBed.createComponent(HosteldeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
