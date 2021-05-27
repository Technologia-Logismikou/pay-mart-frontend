import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Store } from 'src/app/helpers/models/store.model';

@Component({
    selector: 'app-appearance',
    templateUrl: './appearance.component.html',
    styleUrls: ['./appearance.component.scss'],
})
export class AppearanceComponent implements OnInit {
    public store: Store = {
        name: 'Random Shop',
        address: 'Papandreou Apanou 74',
        email: 'random.shop@gmail.com',
        logo: '',
        phone: '+306999999999',
        subdomain: 'random-shop',
        website: 'random-shop.gr',
    };
    public storeForm: FormGroup;

    constructor(private readonly formBuilder: FormBuilder, private readonly message: NzMessageService) {}

    public ngOnInit(): void {
        this.storeForm = this.formBuilder.group({
            name: this.formBuilder.control(this.store?.name || '', [Validators.required]),
            address: this.formBuilder.control(this.store?.address || '', [Validators.required]),
            phone: this.formBuilder.control(this.store?.phone || '', [Validators.required]),
            email: this.formBuilder.control(this.store?.email || '', [Validators.required, Validators.email]),
            subdomain: this.formBuilder.control(this.store?.subdomain || '', [Validators.required]),
            website: this.formBuilder.control(this.store?.website || '', []),
        });

        this.storeForm.valueChanges.subscribe(console.log);
    }

    public changeGeneralData(): void {
        let equals = true;
        for (const key in this.storeForm.controls) {
            if (this.store[key] !== this.storeForm.controls[key].value) {
                equals = false;
                break;
            }
        }

        if (equals) {
            this.message.error('Δεν έχουν πραγματοποιηθεί αλλαγές');
            this.storeForm.markAsPristine();
            return;
        }

        const { value } = this.storeForm;
        // To Do -> Submit value to api
        this.message.success('Τα στοιχεία σου άλλαξαν με επιτυχία');
        this.storeForm.markAsPristine();
    }
}
