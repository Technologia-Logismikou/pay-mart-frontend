import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';

const ngZorroDeps = [NzFormModule, NzInputModule, NzButtonModule, NzMessageModule];

@NgModule({
    declarations: [],
    imports: [CommonModule, ...ngZorroDeps, ReactiveFormsModule, FormsModule],
    exports: [...ngZorroDeps, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
