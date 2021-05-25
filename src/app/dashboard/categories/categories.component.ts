import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CategoryFormModalComponent } from './category-form-modal/category-form-modal.component';
import { categoriesToListOfMapData, convertTreeToList, TreeNodeInterface } from './category-tree-table-helpers';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
    public categories = [
        {
            name: 'Κατωφόρια',
            children: [
                { name: 'Παντελόνι' },
                {
                    name: 'Shorts',
                },
            ],
        },
        {
            name: 'Πανωφόρια',
            children: [
                {
                    name: 'T-SHIRT',
                    children: [
                        {
                            name: 'Απο μπάντες',
                        },
                        {
                            name: 'Για τους υπόλοιπους τους φυσιλογικούς',
                        },
                    ],
                },
                {
                    name: 'Πουκάμισα',
                    children: [
                        {
                            name: 'Με ρίγες',
                        },
                    ],
                },
                {
                    name: 'Πουκαολόκληρα',
                },
            ],
        },
    ];
    constructor(private readonly modalService: NzModalService) {}

    listOfMapData: TreeNodeInterface[] = [];
    mapOfExpandedData: { [key: string]: TreeNodeInterface[] } = {};

    public ngOnInit(): void {
        this.listOfMapData = categoriesToListOfMapData(this.categories);

        this.listOfMapData.forEach((item) => {
            this.mapOfExpandedData[item.key] = convertTreeToList(item);
        });
    }

    private nestedCategoriesToCategoryList(categories: any[]): string[] {
        let names: string[] = [];

        for (let i = 0; i < categories.length; i++) {
            names.push(categories[i].name);
            if (categories[i].children) {
                names.push(...this.nestedCategoriesToCategoryList(categories[i].children));
            }
        }

        return names;
    }

    public createCategory(): void {
        this.modalService.create({
            nzTitle: 'Δημιουργία Κατηγορίας',
            nzContent: CategoryFormModalComponent,
            nzComponentParams: {
                type: 'create',
                categoryList: this.nestedCategoriesToCategoryList(this.categories),
            },
            nzOnOk: () => console.log('ok'),
            nzOnCancel: () => console.log('cancel'),
        });
    }
}
