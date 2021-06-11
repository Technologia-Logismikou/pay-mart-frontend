import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/helpers/models/order.model';

@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.component.html',
    styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
    public customer: string;
    public order: Order = {
        card: 'card1',
        billingAddress: 'Papandreou 45',
        county: 'Achaea',
        coupon: 'none',
        customer: 'Giannis Papagiannoy',
        products: ['Ρόζ Κολίε', 'Μπλέ Κολίε'],
        seller: 'me',
        shippingAddress: 'Papandreou 45',
    };

    constructor(private readonly route: ActivatedRoute) {}

    public ngOnInit(): void {
        this.customer = this.route.snapshot.params.id;
    }
}
