import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    public step = 0;
    public registrationForm: FormGroup;

    constructor(private readonly formBuilder: FormBuilder) {}

    public ngOnInit(): void {
        this.registrationForm = this.formBuilder.group(
            {
                email: this.formBuilder.control('', [Validators.required, Validators.email]),
                password: this.formBuilder.control('', [Validators.required]),
                passwordAgain: this.formBuilder.control('', [Validators.required]),
                phone: this.formBuilder.control('', [Validators.required]),
                store: this.formBuilder.group({
                    name: this.formBuilder.control('', [Validators.required]),
                    address: this.formBuilder.control('', [Validators.required]),
                    phone: this.formBuilder.control('', [Validators.required]),
                    email: this.formBuilder.control('', [Validators.required]),
                    subdomain: this.formBuilder.control('', [Validators.required]),
                    website: this.formBuilder.control('', []),
                }),
                bankAccount: {
                    iban: this.formBuilder.control('', [Validators.required]),
                    name: this.formBuilder.control('', [Validators.required]),
                    beneficiary: this.formBuilder.control('', [Validators.required]),
                },
            },
            {
                validators: [
                    (formGroup: FormGroup): ValidationErrors | null => {
                        const { password, passwordAgain } = formGroup.value;

                        if (password !== passwordAgain) {
                            return { passwordMatch: true };
                        }

                        return null;
                    },
                ],
            }
        );

        this.registrationForm.valueChanges.subscribe(console.log);
    }

    public stepUp(): void {
        this.step++;
    }

    public stepDown(): void {
        this.step--;
    }

    public async submit(): Promise<void> {
        console.log(this.registrationForm.value);
    }
}
