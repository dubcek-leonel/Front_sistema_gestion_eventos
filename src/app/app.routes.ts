import { Routes } from '@angular/router';
import { Login } from './shared/components/login/login';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'admin-dashboard', component: AdminDashboard },
];
