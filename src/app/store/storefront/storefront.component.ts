import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/helpers/models/product.model';

@Component({
    selector: 'app-storefront',
    templateUrl: './storefront.component.html',
    styleUrls: ['./storefront.component.scss'],
    animations: [trigger('fade', [transition('* => void', [animate(1000, style({ opacity: 0 }))])])],
})
export class StorefrontComponent implements OnInit {
    public loading = true;
    public year = new Date().getFullYear();

    public store: { name: string; categories: string[]; products: Product[] } = {
        name: 'Markos Stores',
        categories: ['Πουκάμισα', 'Πουκαολόκληρα'],
        products: [
            {
                category: 'Πουκάμισα',
                description: 'Αυτο το πουκάμισο ειναι πολύ κουλ αλήθεια',
                name: 'Πουκάμισο Ριγέ',
                photos: [],
                price: 26.5,
                public: true,
                url: 'pukamiso-rige',
            },
            {
                category: 'Πουκάολοκληρα',
                description: 'Αυτο το πουκαολοκληρο ειναι πολύ κουλ αλήθεια',
                name: 'Πουκαολοκληρο Ριγέ',
                photos: [],
                price: 30,
                public: true,
                url: 'pukaolokliro-rige',
            },
            {
                category: 'Πουκάολοκληρα',
                description: 'Αυτο το πουκαολοκληρο ειναι πολύ κουλ αλήθεια',
                name: 'Πουκαολοκληρο Ριγέ',
                photos: [],
                price: 30,
                public: true,
                url: 'pukaolokliro-rige',
            },
        ],
    };

    constructor(private readonly route: ActivatedRoute) {}

    public ngOnInit(): void {
        setTimeout(() => {
            this.loading = false;
        }, 1000);

        this.store.name = this.route.snapshot.params.subdomain;
    }
}
