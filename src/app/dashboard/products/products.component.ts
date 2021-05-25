import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { Product } from 'src/app/helpers/models/product.model';
import { ProductFormModalComponent } from './product-form-modal/product-form-modal.component';

interface ColumnItem {
    name: string;
    sortOrder: NzTableSortOrder | null;
    sortFn: NzTableSortFn | null;
    listOfFilter: NzTableFilterList;
    filterFn: NzTableFilterFn | null;
    filterMultiple: boolean;
    sortDirections: NzTableSortOrder[];
}

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    public nameCmpFn = (a: Product, b: Product) => a.name.localeCompare(b.name);
    public priceCmpFn = (a: Product, b: Product) => a.price - b.price;

    public products: Product[] = [
        {
            name: 'White Kolie',
            description: 'Λευκο κολίε που κανει τα πάντα',
            photos: [''],
            price: 26.5,
            public: true,
            url: 'lefko-kolie',
            category: 'koliez',
        },
        {
            name: 'Pink Kolie',
            description: 'Ρόζ κολίε που κανει τα πάντα',
            photos: [''],
            price: 36.5,
            public: true,
            url: 'pink-kolie',
            category: 'koliez',
        },
        {
            name: 'Red Kolie',
            description: 'Κόκκινο κολίε που κανει τα πάντα',
            photos: [''],
            price: 36.5,
            public: true,
            url: 'pink-kolie',
            category: 'koliez',
        },
        {
            name: 'Blue Kolie',
            description: 'Μπλέ κολίε που κανει τα πάντα',
            photos: [''],
            price: 36.5,
            public: true,
            url: 'pink-kolie',
            category: 'koliez',
        },
        {
            name: 'Black Kolie',
            description: 'Μαύρο κολίε που κανει τα πάντα',
            photos: [''],
            price: 36.5,
            public: true,
            url: 'pink-kolie',
            category: 'koliez',
        },
        {
            name: 'Silver Kolie',
            description: 'Ασημί κολίε που κανει τα πάντα',
            photos: [''],
            price: 36.5,
            public: true,
            url: 'pink-kolie',
            category: 'koliez',
        },
    ];

    constructor(private readonly modalService: NzModalService) {}

    public ngOnInit(): void {}

    public createNewProduct(): void {
        this.modalService.create({
            nzTitle: 'Δημιουργία Προϊόντος',
            nzContent: ProductFormModalComponent,
            nzComponentParams: {
                type: 'create',
            },
            nzOnOk: () => console.log('ok'),
            nzOnCancel: () => console.log('cancel'),
        });
    }

    public deleteProduct(e: MouseEvent, product: Product): void {
        e.stopImmediatePropagation();

        this.modalService.confirm({
            nzTitle: 'Θες σίγουρα να διαγράψεις το προϊόν',
            nzContent: 'Πατώντας ναι θα διαγραφεί το πρϊόν για πάντα',
            nzOkType: 'primary',
            nzOkDanger: true,
            nzOnOk: () => (this.products = this.products.filter((pr) => pr.name !== product.name)),
            nzOnCancel: () => console.log('Cancel'),
        });
    }
}
