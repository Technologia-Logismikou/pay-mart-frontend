import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/helpers/models/order.model';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
    public orders: Order[] = [
        {
            card: 'card1',
            billingAddress: 'Papandreou 45',
            county: 'Achaea',
            coupon: 'none',
            customer: 'Giannis Papagiannoy',
            products: ['Ρόζ Κολίε', 'Μπλέ Κολίε'],
            seller: 'me',
            shippingAddress: 'Papandreou 45',
        },
    ];

    constructor() {}

    public ngOnInit(): void {}
}
