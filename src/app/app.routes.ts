import { Routes } from '@angular/router';
import { Login } from './shared/components/login/login';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';
import { StudentDashboard } from './pages/student-dashboard/student-dashboard';
import {Home} from './pages/home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'admin-dashboard', component: AdminDashboard },
  { path: 'student-dashboard', component: StudentDashboard },
];
