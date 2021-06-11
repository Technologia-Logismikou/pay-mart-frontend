import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
    lineChartData: ChartDataSets[] = [
        { data: [1000, 1203.2, 961.5, 730.2, 1401.7, 1500.3], label: 'Εισόδημα Ανα μήνα' },
    ];

    lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

    lineChartOptions: ChartOptions = {
        animation: {
            animateScale: true,
            animateRotate: true,
            duration: 2000,
            easing: 'easeInCirc',
        },
        responsive: true,
    };

    lineChartColors: Color[] = [
        {
            borderColor: '#6934ff',
            backgroundColor: '#b499ff',
        },
    ];

    lineChartLegend = true;
    lineChartPlugins = [];
    lineChartType = 'line';

    constructor() {}

    ngOnInit(): void {}
}
