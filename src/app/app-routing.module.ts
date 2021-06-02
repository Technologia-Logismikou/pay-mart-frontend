import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './shared/components/loading/loading.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./login-register/login-register.module').then((m) => m.LoginRegisterModule),
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
    {
        path: ':subdomain',
        loadChildren: () => import('./store/store.module').then((m) => m.StoreModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
