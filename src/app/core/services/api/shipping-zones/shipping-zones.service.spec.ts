import { TestBed } from '@angular/core/testing';

import { ShippingZonesService } from './shipping-zones.service';

describe('ShippingZonesService', () => {
  let service: ShippingZonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippingZonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
