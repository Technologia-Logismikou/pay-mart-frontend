import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

if (environment.production) {
    console.log(`Production Mode`);
}

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, BrowserAnimationsModule],
})
export class CoreModule {}
