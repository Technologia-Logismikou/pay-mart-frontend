import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    public isCollapsed = false;
    public year = new Date().getFullYear();

    public navigationItems: { title: string; icon: string; route: string }[] = [
        {
            title: 'Αρχική',
            icon: 'home',
            route: 'home',
        },
        {
            title: 'Παραγγελίες',
            icon: 'shopping-cart',
            route: 'orders',
        },
        {
            title: 'Κατηγορίες',
            icon: 'unordered-list',
            route: 'categories',
        },
        {
            title: 'Προϊόντα',
            icon: 'shopping',
            route: 'products',
        },
        {
            title: 'Εμφάνιση',
            icon: 'shop',
            route: 'appearance',
        },
        {
            title: 'Ζώνες Αποστολής',
            icon: 'heat-map',
            route: 'delivery-zones',
        },
    ];

    public localeList: { title: string; value: string }[] = [
        {
            title: 'Ελληνικά',
            value: 'el-GR',
        },
    ];

    constructor() {}

    public changeLocaleTranslation(localeValue: string): void {
        // TO DO -> add translation change
        console.log(localeValue);
    }
}
