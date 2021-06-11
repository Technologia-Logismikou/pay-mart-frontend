import { Component, OnInit } from '@angular/core';
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

    constructor(private readonly modalService: NzModalService, private readonly categoryApi: CategoriesService) {}

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
            nzOnOk: () => console.log('ok'),
            nzOnCancel: () => console.log('cancel'),
        });
    }
}
