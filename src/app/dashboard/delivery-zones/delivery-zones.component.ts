import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ShippingZonesService as ShippingZoneApiService } from 'src/app/core/services/api/shipping-zones/shipping-zones.service';
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

    constructor(
        public msg: NzMessageService,
        private readonly modalSrvc: NzModalService,
        private readonly shippingZoneApi: ShippingZoneApiService
    ) {}

    public async ngOnInit(): Promise<void> {
        this.shippingZones = await this.shippingZoneApi.getShippingZones().toPromise();
    }

    public editShippingZone(zone: ShippingZone): void {
        this.modalSrvc.create({
            nzTitle: `Επεξεργασία "${zone.name}"`,
            nzContent: DeliveryZonesFormModalComponent,
            nzComponentParams: {
                type: 'edit',
                counties: this.counties,
                zone,
            },
            nzOnOk: async (instance) => {
                const res = await instance.submit();

                if (res) this.shippingZones = await this.shippingZoneApi.getShippingZones().toPromise();
            },
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
            nzOnOk: async (instance) => {
                const res = await instance.submit();

                if (res) this.shippingZones = await this.shippingZoneApi.getShippingZones().toPromise();
            },
            nzOnCancel: () => console.log('cancel'),
        });
    }

    public async deleteShippingZone(zone: ShippingZone): Promise<void> {
        try {
            await this.shippingZoneApi.deleteShippingZone(zone.id).toPromise();

            this.msg.success(`Η ζώνη ${zone.name} διαγράφηκε επιτυχώς`);

            this.shippingZones = this.shippingZones.filter((shippingZone) => shippingZone.id !== zone.id);
        } catch (e) {
            this.msg.error(`Υπήρξε σφάλμα κατα την διαγραφή της ζώνης ${zone.name}`);
        }
    }
}
