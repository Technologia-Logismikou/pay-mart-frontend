import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponsFormModalComponent } from './coupons-form-modal.component';

describe('CouponsFormModalComponent', () => {
  let component: CouponsFormModalComponent;
  let fixture: ComponentFixture<CouponsFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponsFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponsFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
