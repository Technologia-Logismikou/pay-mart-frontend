import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    constructor(private readonly formBuilder: FormBuilder, private readonly message: NzMessageService) {}

    public ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: this.formBuilder.control('', [Validators.required, Validators.email]),
            password: this.formBuilder.control('', [Validators.required]),
        });
    }

    public async submitForm(): Promise<void> {
        if (this.loginForm.invalid) {
            this.message.error('Συμπληρώστε σωστά τα στοιχεία');
            return;
        }

        /**
         *
         *  TO DO -> Submit this form data to backend
         *
         */
        console.log(this.loginForm.value);
    }
}
