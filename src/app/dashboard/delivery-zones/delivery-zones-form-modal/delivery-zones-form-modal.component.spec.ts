import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryZonesFormModalComponent } from './delivery-zones-form-modal.component';

describe('DeliveryZonesFormModalComponent', () => {
  let component: DeliveryZonesFormModalComponent;
  let fixture: ComponentFixture<DeliveryZonesFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryZonesFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryZonesFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
