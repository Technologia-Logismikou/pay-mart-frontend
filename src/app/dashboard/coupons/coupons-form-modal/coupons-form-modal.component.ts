import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CouponsService } from 'src/app/core/services/api/coupons/coupons.service';
import { Coupon } from 'src/app/helpers/models/coupon.model';

@Component({
    selector: 'app-coupons-form-modal',
    templateUrl: './coupons-form-modal.component.html',
    styleUrls: ['./coupons-form-modal.component.scss'],
})
export class CouponsFormModalComponent implements OnInit {
    @Input()
    public type: 'create' | 'edit';
    @Input()
    public coupon: Coupon;

    public formatterPercent = (value: number) => `${value} %`;
    public parserPercent = (value: string) => value.replace(' %', '');
    public formatterEuro = (value: number) => `€ ${value}`;
    public parserEuro = (value: string) => value.replace('€ ', '');

    public couponForm: FormGroup;

    constructor(
        private readonly formBuilder: FormBuilder,
        private couponApi: CouponsService,
        private readonly message: NzMessageService
    ) {}

    public ngOnInit(): void {
        this.couponForm = this.formBuilder.group({
            name: this.formBuilder.control(this.type === 'edit' ? this.coupon.name : '', [Validators.required]),
            description: this.formBuilder.control(this.type === 'edit' ? this.coupon.description : '', [
                Validators.required,
            ]),
            amountOff: this.formBuilder.control(this.type === 'edit' ? this.coupon.amountOff : 0, [
                Validators.required,
            ]),
            percentOff: this.formBuilder.control(this.type === 'edit' ? this.coupon.percentOff : 0, [
                Validators.required,
            ]),
            maxRedemptions: this.formBuilder.control(this.type === 'edit' ? this.coupon.maxRedemptions : 0, [
                Validators.required,
            ]),
            expiration: this.formBuilder.control(this.type === 'edit' ? this.coupon.expiration : '', [
                Validators.required,
            ]),
            active: this.formBuilder.control(this.type === 'edit' ? this.coupon.active : false, [Validators.required]),
        });
    }

    public async submit(): Promise<Coupon> {
        if (this.couponForm.invalid) {
            return;
        }

        if (this.type === 'create') {
            try {
                const apiRes = await this.couponApi.createCoupon(this.couponForm.value).toPromise();

                this.message.success(`Το κουπόνι δημιουργήθηκε επιτυχώς`);

                return apiRes;
            } catch (error) {
                this.message.error(`Υπήρξε πρόβλημα κατα την δημιουργία του κουπονιού`);
                return;
            }
        } else if (this.type === 'edit') {
            try {
                const apiRes = await this.couponApi.editCoupon(this.couponForm.value, this.coupon.id).toPromise();

                this.message.success(`Το κουπόνι ανανεώθηκε επιτυχώς`);

                return apiRes;
            } catch (error) {
                this.message.error(`Υπήρξε πρόβλημα κατα την ανανέωση του κουπονιού`);
                return;
            }
        }
    }
}
