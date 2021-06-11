import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ShippingZonesService as ShippingZonesApiService } from 'src/app/core/services/api/shipping-zones/shipping-zones.service';
import { ShippingZone, ShippingZoneDto } from 'src/app/helpers/models/shipping-zone.model';

@Component({
    selector: 'app-delivery-zones-form-modal',
    templateUrl: './delivery-zones-form-modal.component.html',
    styleUrls: ['./delivery-zones-form-modal.component.scss'],
})
export class DeliveryZonesFormModalComponent implements OnInit {
    @Input()
    public zone: ShippingZone;
    @Input()
    public type: 'create' | 'edit';
    @Input()
    public counties: string[];
    public shippingZoneForm: FormGroup;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly shippingZoneApiService: ShippingZonesApiService,
        private readonly message: NzMessageService
    ) {}

    public ngOnInit(): void {
        this.shippingZoneForm = this.formBuilder.group({
            name: this.formBuilder.control(this.type === 'edit' ? this.zone.name : '', [Validators.required]),
            counties: this.formBuilder.control(this.type === 'edit' ? this.zone.counties : [], Validators.required),
            rate: this.formBuilder.control(this.type === 'edit' ? this.zone.rate : 0, Validators.required),
        });
    }

    public euroFormatter(value: number): string {
        return `${value} €`;
    }

    public euroParser(value: string): string {
        return value.replace(' €', '');
    }

    public async submit(): Promise<ShippingZone> {
        if (this.shippingZoneForm.invalid) {
            return;
        }

        if (this.type === 'create') {
            try {
                const apiRes = await this.shippingZoneApiService
                    .createShppingZone(this.shippingZoneForm.value as ShippingZoneDto)
                    .toPromise();

                this.message.success(`Ζώνη "${this.shippingZoneForm.value.name}" δημιουργήθηκε`);

                return apiRes;
            } catch (e) {
                this.message.error(`Υπήρξε πρόβλημα κατα τη δημιουργία της ζώνης `);
                return;
            }
        } else if (this.type === 'edit') {
            try {
                const apiRes = await this.shippingZoneApiService
                    .editShippingZone(this.zone.id, this.shippingZoneForm.value as ShippingZoneDto)
                    .toPromise();

                this.message.success(`Ζώνη ${this.shippingZoneForm.value.name} ανανεώθηκε`);

                return apiRes;
            } catch (e) {
                this.message.error(`Υπήρξε πρόβλημα κατα την ανανέωση της ζώνης `);
                return;
            }
        }
    }
}
