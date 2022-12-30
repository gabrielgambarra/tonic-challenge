import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { RouterModule } from '@angular/router';
import { UserListRoutes } from './user-list.routing';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateEditModalModule } from 'src/app/components/create-edit-modal/create-edit-modal.module';
import { DeleteUserModalModule } from 'src/app/components/delete-user-modal/delete-user-modal.module';
import { UserInfoModule } from 'src/app/components/user-info/user-info.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(UserListRoutes),
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    CreateEditModalModule,
    DeleteUserModalModule,
    UserInfoModule,
  ],
})
export class UserListModule {}
