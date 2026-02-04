import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AccountDetails } from './components/account-details/account-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'account', component: AccountDetails },
];
