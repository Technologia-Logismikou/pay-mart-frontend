import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CategoriesService } from 'src/app/core/services/api/categories/categories.service';
import { Category } from 'src/app/helpers/models/category.model';

@Component({
    selector: 'app-category-form-modal',
    templateUrl: './category-form-modal.component.html',
    styleUrls: ['./category-form-modal.component.scss'],
})
export class CategoryFormModalComponent implements OnInit {
    @Input()
    public type: 'create' | 'edit';
    // @Input()
    // public categoryList: string[];
    @Input() category: Category;
    public categoryForm: FormGroup;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly categoryApi: CategoriesService,
        private readonly message: NzMessageService
    ) {}

    public ngOnInit(): void {
        this.categoryForm = this.formBuilder.group({
            name: this.formBuilder.control(this.type === 'create' ? '' : this.category.name, [Validators.required]),
        });
    }

    public async submit(): Promise<Category> {
        if (this.categoryForm.invalid) {
            return;
        }

        if (this.type === 'create') {
            try {
                const apires = await this.categoryApi.createCategory(this.categoryForm.value).toPromise();

                this.message.success(`Η κατηγορία "${this.categoryForm.value.name}" δημιουργήθηκε επιτυχώς`);

                return apires;
            } catch (e) {
                this.message.error(`Υπήρξε πρόβλημα κατα τη δημιουργία της κατηγορίας`);
                return;
            }
        } else if (this.type === 'edit') {
            try {
                const apires = await this.categoryApi
                    .editCategory(this.category.id, this.categoryForm.value)
                    .toPromise();

                this.message.success(`Η κατηγορία "${this.categoryForm.value.name}" άλλαξε επιτυχώς`);

                return apires;
            } catch (e) {
                this.message.error(`Υπήρξε πρόβλημα κατα τη ανανέωση της κατηγορίας`);
                return;
            }
        }
    }
}
