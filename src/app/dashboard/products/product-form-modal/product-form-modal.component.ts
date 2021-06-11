import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CategoriesService as CategoriesApiService } from 'src/app/core/services/api/categories/categories.service';
import { ProductService as ProductApiService } from 'src/app/core/services/api/product/product.service';
import { Category } from 'src/app/helpers/models/category.model';
import { Product, ProductDto } from 'src/app/helpers/models/product.model';
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

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly categoryApi: CategoriesApiService,
        private readonly productApi: ProductApiService,
        private readonly message: NzMessageService
    ) {}

    public async ngOnInit(): Promise<void> {
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

        this.categories = await this.categoryApi.getCategories().toPromise();
    }

    public euroFormatter(value: number): string {
        return `${value} €`;
    }

    public euroParser(value: string): string {
        return value.replace(' €', '');
    }

    public async submit(): Promise<Product> {
        if (this.type === 'create') {
            try {
                const apiRes = await this.productApi
                    .createProduct({ ...this.productForm.value, photos: [] } as ProductDto)
                    .toPromise();

                this.message.success(`Το "${this.productForm.value.name}" δημιουρήθηκε επιτυχώς`);
                return apiRes;
            } catch (e) {
                this.message.error(`Υπήρξε πρόβλημα κατα την δημιουργία του "${this.productForm.value.name}"`);
                return;
            }
        } else if (this.type === 'edit') {
            try {
                const apiRes = await this.productApi
                    .editProduct({ ...this.productForm.value, photos: [] } as ProductDto, this.product.id)
                    .toPromise();
                this.message.success(`Το ${this.productForm.value.name} ανανεώθηκε`);
                return apiRes;
            } catch (e) {
                this.message.error(`Υπήρξε πρόβλημα κατα την ανανέωση του "${this.productForm.value.name}"`);
                return;
            }
        }
    }
}
