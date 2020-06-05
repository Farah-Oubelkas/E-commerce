import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementComponent } from './payement.component';

describe('PayementComponent', () => {
  let component: PayementComponent;
  let fixture: ComponentFixture<PayementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
