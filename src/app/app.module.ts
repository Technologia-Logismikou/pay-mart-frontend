import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { el_GR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import el from '@angular/common/locales/el';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

registerLocaleData(el);

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, CoreModule],
    providers: [{ provide: NZ_I18N, useValue: el_GR }],
    bootstrap: [AppComponent],
})
export class AppModule {}
