import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { ProductService as ProductApiService } from 'src/app/core/services/api/product/product.service';
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

    public products: Product[] = [];

    constructor(
        private readonly modalService: NzModalService,
        private readonly productApi: ProductApiService,
        private readonly message: NzMessageService
    ) {}

    public async ngOnInit(): Promise<void> {
        this.products = await this.productApi.getProducts().toPromise();
    }

    public createNewProduct(): void {
        this.modalService.create({
            nzTitle: 'Δημιουργία Προϊόντος',
            nzContent: ProductFormModalComponent,
            nzComponentParams: {
                type: 'create',
            },
            nzOnOk: async (componentInstance) => {
                const modalVal = await componentInstance.submit();

                if (modalVal) {
                    this.products = [...this.products, modalVal];
                }
            },
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
            nzOnOk: async () => {
                try {
                    const apiRes = await this.productApi.delete(product.id).toPromise();

                    this.message.success(`${product.name} διαγράφηκε επιτυχώς`);
                } catch (e) {
                    this.message.error(`Υπήρξε πρόβλημα κατα την διαγραφή του ${product.name}`);
                } finally {
                    this.products = this.products.filter((pr) => pr.name !== product.name);
                }
            },
            nzOnCancel: () => console.log('Cancel'),
        });
    }

    public editProduct(e: MouseEvent, product: Product) {
        e.stopImmediatePropagation();

        this.modalService.create({
            nzTitle: 'Δημιουργία Προϊόντος',
            nzContent: ProductFormModalComponent,
            nzComponentParams: {
                type: 'edit',
                product,
            },
            nzOnOk: async (componentInstance) => {
                const modalVal = await componentInstance.submit();

                if (modalVal) {
                    this.products = [...this.products, modalVal];
                }
            },
            nzOnCancel: () => console.log('cancel'),
        });
    }
}
