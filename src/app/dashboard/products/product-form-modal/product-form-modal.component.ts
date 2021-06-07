import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService as CategoriesApiService } from 'src/app/core/services/api/categories/categories.service';
import { Category } from 'src/app/helpers/models/category.model';
import { Product } from 'src/app/helpers/models/product.model';
import { ProductValidators } from '../product-form.validator';

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
    public categories: Category[];
    public productForm: FormGroup;

    constructor(private readonly formBuilder: FormBuilder, private readonly categoryApi: CategoriesApiService) {}

    public async ngOnInit(): Promise<void> {
        this.categories = await this.categoryApi.getCategories().toPromise();

        this.productForm = this.formBuilder.group({
            name: this.formBuilder.control(this.type === 'create' ? '' : this.product.name, [Validators.required]),
            description: this.formBuilder.control(this.type === 'create' ? '' : this.product.description, [
                Validators.required,
            ]),
            price: this.formBuilder.control(this.type === 'create' ? 0 : this.product.price, [Validators.required]),
            public: this.formBuilder.control(this.type === 'create', [Validators.required]),
            slug: this.formBuilder.control(this.type === 'create' ? '' : this.product.slug, [
                Validators.required,
                ProductValidators.slugValidator,
            ]),
            category: this.formBuilder.control(this.type === 'create' ? '' : this.product.category, [
                Validators.required,
            ]),
            url: this.formBuilder.control(this.type === 'create' ? '' : this.product.url, [Validators.required]),
        });
    }

    public euroFormatter(value: number): string {
        return `${value} €`;
    }

    public euroParser(value: string): string {
        return value.replace(' €', '');
    }
}
