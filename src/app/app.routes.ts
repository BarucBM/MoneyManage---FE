import { Routes } from '@angular/router';
import { AccountsManagerComponent } from './sections/accounts-manager/accounts-manager.component';
import { OverviewComponent } from './sections/overview/overview.component';

export const routes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent,
  },
  {
    path: 'accounts',
    component: AccountsManagerComponent,
  },
  {
    path: '',
    redirectTo: '/overview',
    pathMatch: 'full'
  }
];
