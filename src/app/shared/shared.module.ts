import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';

const ngZorroDeps = [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzMessageModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzCardModule,
];

@NgModule({
    declarations: [],
    imports: [CommonModule, ...ngZorroDeps, ReactiveFormsModule, FormsModule],
    exports: [...ngZorroDeps, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
