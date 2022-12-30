import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CreateEditModalComponent } from 'src/app/components/create-edit-modal/create-edit-modal.component';
import { DeleteUserModalComponent } from 'src/app/components/delete-user-modal/delete-user-modal.component';
import { UserInfoComponent } from 'src/app/components/user-info/user-info.component';
import { UserListData } from 'src/app/providers/models/UserListResponse.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'lastname', 'actions'];
  dataSource = new MatTableDataSource<UserListData>([]);
  page: number = 1;
  total!: number;
  userData: UserListData[] = [];

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getUserList();
  }

  getUserList(event?: any) {
    if (event) {
      this.page = event.pageIndex + 1;
    }
    this.userService.getAllUsers(this.page).subscribe((data) => {
      this.userData = data.data;
      this.dataSource = new MatTableDataSource<UserListData>(data.data);
      this.page = data.page;
      this.total = data.total;
    });
  }

  openInfo(element: UserListData): void {
    this.dialog.open(UserInfoComponent, {
      data: element.id,
      maxWidth: '80vw',
    });
  }

  openEdit(element: UserListData): void {
    const editModal = this.dialog.open(CreateEditModalComponent, {
      data: { element, type: 'edit' },
    });

    editModal.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.updateUser(element.id, result).subscribe((data) => {
          this.dataSource.data = this.dataSource.data.map((item) =>
            item.id === element.id ? data : item
          );
          this.userData = this.userData.map((item) =>
            item.id === element.id ? data : item
          );
        });
      }
    });
  }

  openDelete(element: UserListData): void {
    const deleteModal = this.dialog.open(DeleteUserModalComponent, {
      data: { ...element },
    });

    deleteModal.afterClosed().subscribe((result) => {
      if (result) {
        this.userService.deleteUserById(element.id).subscribe(() => {
          this.dataSource.data = this.dataSource.data.filter(
            (item) => item.id !== element.id
          );
          this.userData = this.userData.filter(
            (item) => item.id !== element.id
          );
        });
      }
    });
  }
}
