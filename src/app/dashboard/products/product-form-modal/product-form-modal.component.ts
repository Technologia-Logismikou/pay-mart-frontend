import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/helpers/models/product.model';

@Component({
    selector: 'app-product-form-modal',
    templateUrl: './product-form-modal.component.html',
    styleUrls: ['./product-form-modal.component.scss'],
})
export class ProductFormModalComponent implements OnInit {
    @Input()
    public type: 'create' | 'edit';
    @Input()
    public product: Product;

    public productForm: FormGroup;

    constructor(private readonly formBuilder: FormBuilder) {}

    public ngOnInit(): void {
        this.productForm = this.formBuilder.group({
            name: this.formBuilder.control(this.type === 'create' ? '' : this.product.name, [Validators.required]),
            description: this.formBuilder.control(this.type === 'create' ? '' : this.product.description, [
                Validators.required,
            ]),
            price: this.formBuilder.control(this.type === 'create' ? 0 : this.product.price, [Validators.required]),
            public: this.formBuilder.control(this.type === 'create', [Validators.required]),
            url: this.formBuilder.control(this.type === 'create' ? '' : this.product.url, [Validators.required]),
        });

        this.productForm.valueChanges.subscribe(console.log);
    }

    public euroFormatter(value: number): string {
        return `${value} €`;
    }

    public euroParser(value: string): string {
        return value.replace(' €', '');
    }
}
