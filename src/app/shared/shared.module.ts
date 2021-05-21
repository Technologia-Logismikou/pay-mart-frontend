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
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

const ngZorroDeps = [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzMessageModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzCardModule,
    NzDropDownModule,
    NzAvatarModule,
    NzPageHeaderModule,
    NzDividerModule,
    NzEmptyModule,
];

@NgModule({
    declarations: [],
    imports: [...ngZorroDeps, CommonModule, ReactiveFormsModule, FormsModule],
    exports: [...ngZorroDeps, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
