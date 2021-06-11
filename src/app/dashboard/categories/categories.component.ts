import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CategoriesService } from 'src/app/core/services/api/categories/categories.service';
import { Category } from 'src/app/helpers/models/category.model';
import { CategoryFormModalComponent } from './category-form-modal/category-form-modal.component';
import { categoriesToListOfMapData, convertTreeToList, TreeNodeInterface } from './category-tree-table-helpers';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
    public categories: Category[] = [];

    constructor(
        private readonly modalService: NzModalService,
        private readonly categoryApi: CategoriesService,
        private readonly message: NzMessageService
    ) {}

    // listOfMapData: TreeNodeInterface[] = [];
    // mapOfExpandedData: { [key: string]: TreeNodeInterface[] } = {};

    public async ngOnInit(): Promise<void> {
        this.categories = await this.categoryApi.getCategories().toPromise();

        // this.listOfMapData = categoriesToListOfMapData(this.categories);
        // this.listOfMapData.forEach((item) => {
        //     this.mapOfExpandedData[item.key] = convertTreeToList(item);
        // });
    }

    // private nestedCategoriesToCategoryList(categories: any[]): string[] {
    //     let names: string[] = [];

    //     for (let i = 0; i < categories.length; i++) {
    //         names.push(categories[i].name);
    //         if (categories[i].children) {
    //             names.push(...this.nestedCategoriesToCategoryList(categories[i].children));
    //         }
    //     }

    //     return names;
    // }

    public createCategory(): void {
        this.modalService.create({
            nzTitle: 'Δημιουργία Κατηγορίας',
            nzContent: CategoryFormModalComponent,
            nzComponentParams: {
                type: 'create',
            },
            nzOnOk: async (componentInstance) => {
                const modalVal = await componentInstance.submit();

                if (modalVal) {
                    this.categories = [...this.categories, modalVal];
                }
            },
            nzOnCancel: () => console.log('cancel'),
        });
    }

    public editCategory(data: Category) {
        this.modalService.create({
            nzTitle: 'Επεξεργασία ' + data.name,
            nzContent: CategoryFormModalComponent,
            nzComponentParams: {
                type: 'edit',
                category: data,
            },
            nzOnOk: async (componentInstance) => {
                const modalVal = await componentInstance.submit();

                if (modalVal) {
                    this.categories = this.categories.filter((cat) => cat.id === modalVal.id);
                    this.categories.push(modalVal);
                }
            },
            nzOnCancel: () => console.log('cancel'),
        });
    }

    public async deleteCategory(id: string): Promise<void> {
        try {
            const apiRes = await this.categoryApi.deleteCategory(id).toPromise();

            this.message.success(`Η κατηγορία διαγράφηκε`);

            this.categories = this.categories.filter((cat) => cat.id === id);
        } catch (error) {
            this.message.error(`Υπήρξε πρόβλημα κατα την διαγραφή`);
        }
    }
}
