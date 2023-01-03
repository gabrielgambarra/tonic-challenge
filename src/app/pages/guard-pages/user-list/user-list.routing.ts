import { Routes } from '@angular/router';
import { UserListComponent } from './user-list.component';

export const UserListRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UserListComponent,
      },
    ],
  },
];