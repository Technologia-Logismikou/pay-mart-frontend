import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterRoutingModule } from './login-register-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
    declarations: [RegisterComponent, LoginComponent, LandingPageComponent],
    imports: [CommonModule, LoginRegisterRoutingModule, SharedModule],
})
export class LoginRegisterModule {}
