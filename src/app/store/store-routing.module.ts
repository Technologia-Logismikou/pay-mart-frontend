import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { StorefrontComponent } from './storefront/storefront.component';

const routes: Routes = [
    {
        path: '',
        component: StorefrontComponent,
    },
    {
        path: ':product',
        component: CheckoutComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StoreRoutingModule {}
