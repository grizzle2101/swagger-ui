import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AccountDetails } from './components/account-details/account-details';
import { Login } from './components/login/login';
import { Logout } from './components/logout/logout';
import { authenticatedGuard } from './guards/authenticated-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'account', component: AccountDetails, canActivate: [authenticatedGuard] },
  { path: 'login', component: Login },
  { path: 'logout', component: Logout },
];
