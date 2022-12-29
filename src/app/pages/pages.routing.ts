import { Routes } from '@angular/router';
import { AuthGuard } from 'src/security/auth.guard';
import { LoginGuard } from 'src/security/login.guard';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard],
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [LoginGuard],
      },
      {
        path: 'list',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./guard-pages/user-list/user-list.module').then(
            (m) => m.UserListModule
          ),
      },
    ],
  },
];
