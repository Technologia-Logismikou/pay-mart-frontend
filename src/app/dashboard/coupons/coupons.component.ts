import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CouponsService } from 'src/app/core/services/api/coupons/coupons.service';
import { Coupon } from 'src/app/helpers/models/coupon.model';
import { CouponsFormModalComponent } from './coupons-form-modal/coupons-form-modal.component';

@Component({
    selector: 'app-coupons',
    templateUrl: './coupons.component.html',
    styleUrls: ['./coupons.component.scss'],
})
export class CouponsComponent implements OnInit {
    public coupons: Coupon[] = [];

    constructor(
        private readonly modal: NzModalService,
        private readonly couponApi: CouponsService,
        private readonly message: NzMessageService
    ) {}

    public async ngOnInit(): Promise<void> {
        this.coupons = await this.couponApi.getCoupons().toPromise();
    }

    public createCoupon(): void {
        this.modal.create({
            nzTitle: 'Δημιουργία Κουπονιού',
            nzContent: CouponsFormModalComponent,
            nzComponentParams: {
                type: 'create',
            },
            nzOnOk: async (componentInstance) => {
                const modalVal = await componentInstance.submit();
                if (modalVal) {
                    this.coupons = [...this.coupons, modalVal];
                }
            },
            nzOnCancel: () => console.log('cancel'),
        });
    }

    public editCoupon(coupon: Coupon): void {
        this.modal.create({
            nzTitle: 'Δημιουργία Κουπονιού',
            nzContent: CouponsFormModalComponent,
            nzComponentParams: {
                type: 'edit',
                coupon: coupon,
            },
            nzOnOk: async (componentInstance) => {
                const modalVal = await componentInstance.submit();
                if (modalVal) {
                    this.coupons = this.coupons.map((c) => {
                        if (c.id === coupon.id) {
                            return modalVal;
                        } else {
                            return c;
                        }
                    });
                }
            },
            nzOnCancel: () => console.log('cancel'),
        });
    }

    public async deleteCoupon(id: string): Promise<void> {
        try {
            const apiRes = await this.couponApi.deleteCoupon(id).toPromise();

            this.message.success('Διαγράφηκε επιτυχως');

            this.coupons = this.coupons.filter((c) => c.id === id);
        } catch (error) {
            this.message.error('Υπήρξε πρόβλημα κατα την διαγραφή');
        }
    }
}
