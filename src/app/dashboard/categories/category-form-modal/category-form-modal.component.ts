import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-category-form-modal',
    templateUrl: './category-form-modal.component.html',
    styleUrls: ['./category-form-modal.component.scss'],
})
export class CategoryFormModalComponent implements OnInit {
    @Input()
    public type: 'create' | 'edit';
    @Input()
    public categoryList: string[];
    public categoryForm: FormGroup;

    constructor(private readonly formBuilder: FormBuilder) {}

    public ngOnInit(): void {
        this.categoryForm = this.formBuilder.group({
            name: this.formBuilder.control('', [Validators.required]),
            parent: this.formBuilder.control('', [Validators.required]),
        });

        this.categoryForm.valueChanges.subscribe(console.log);
    }
}
