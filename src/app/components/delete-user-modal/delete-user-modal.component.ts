import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserListData } from 'src/app/providers/models/UserListResponse.interface';

@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.scss'],
})
export class DeleteUserModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: UserListData) {}
}
