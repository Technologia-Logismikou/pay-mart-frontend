import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ShippingZone } from 'src/app/helpers/models/shipping-zone.model';
import { COUNTIES } from '../../helpers/constants';
import { DeliveryZonesFormModalComponent } from './delivery-zones-form-modal/delivery-zones-form-modal.component';

@Component({
    selector: 'app-delivery-zones',
    templateUrl: './delivery-zones.component.html',
    styleUrls: ['./delivery-zones.component.scss'],
})
export class DeliveryZonesComponent implements OnInit {
    public shippingZones: ShippingZone[] = [];

    public counties = COUNTIES;

    constructor(public msg: NzMessageService, private readonly modalSrvc: NzModalService) {}

    public async ngOnInit(): Promise<void> {}

    public editShippingZone(zone: ShippingZone): void {
        this.modalSrvc.create({
            nzTitle: `Επεξεργασία "${zone.name}"`,
            nzContent: DeliveryZonesFormModalComponent,
            nzComponentParams: {
                type: 'edit',
                counties: this.counties,
                zone,
            },
            nzOnOk: () => console.log('ok'),
            nzOnCancel: () => console.log('cancel'),
        });
    }

    public createShippingZone(): void {
        this.modalSrvc.create({
            nzTitle: 'Δημιουργία Ζώνης Αποστολής',
            nzContent: DeliveryZonesFormModalComponent,
            nzComponentParams: {
                type: 'create',
                counties: this.counties,
            },
            nzOnOk: () => console.log('ok'),
            nzOnCancel: () => console.log('cancel'),
        });
    }
}
