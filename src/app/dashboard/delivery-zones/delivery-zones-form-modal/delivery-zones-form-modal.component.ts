import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShippingZone } from 'src/app/helpers/models/shipping-zone.model';

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

    constructor(private readonly formBuilder: FormBuilder) {}

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
}
