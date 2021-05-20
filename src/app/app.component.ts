import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public title = 'PayMart | Ολοκληρωμένη λύση για μικρές συναλλαγές';

    constructor(private readonly titleService: Title) {}

    public ngOnInit(): void {
        this.titleService.setTitle(this.title);
    }
}
