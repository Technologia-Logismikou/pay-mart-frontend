import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
    public loading = true;

    public subdomain: string;
    public product: string;
    public checkoutForm: FormGroup;

    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private message: NzMessageService) {}

    public ngOnInit(): void {
        setTimeout(() => {
            this.loading = false;
        }, 1000);

        this.subdomain = this.route.snapshot.params.subdomain;
        this.product = this.route.snapshot.params.product;

        this.checkoutForm = this.formBuilder.group({
            email: this.formBuilder.control('', [Validators.email]),
            card_number: this.formBuilder.control('', [Validators.required]),
            cvv: this.formBuilder.control('', [Validators.required]),
            expiry_date: this.formBuilder.control('', [Validators.required]),
            billing_address: this.formBuilder.control('', [Validators.required]),
        });
    }

    public submit(): void {
        if (this.checkoutForm.invalid) {
            return;
        }

        // To Do -> Post to api a new order
        this.message.success('New Order Placed');
    }
}
