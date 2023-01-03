import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateEditModalData } from 'src/app/providers/models/CreateEditModalData.model';
import { UserListData } from 'src/app/providers/models/UserListResponse.interface';
import { UserService } from 'src/app/services/user.service';
import { Form } from 'src/app/utils/form';

@Component({
  selector: 'app-create-edit-modal',
  templateUrl: './create-edit-modal.component.html',
  styleUrls: ['./create-edit-modal.component.scss'],
})
export class CreateEditModalComponent
  extends Form<UserListData>
  implements OnInit
{
  createEditError!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CreateEditModalData,
    private userService: UserService,
    private dialogRef: MatDialogRef<CreateEditModalComponent>
  ) {
    super(UserListData);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.obj = { ...this.data.element };
  }

  dialogTitle = this.data.type === 'edit' ? 'Editar usuário' : 'Criar usuário';

  override submitForm(): void {
    this.createEditError = '';
    if (this.data.type === 'edit') {
      this.userService.updateUser(this.data.element.id, this.obj).subscribe(
        (data) => {
          this.dialogRef.close(data);
        },
        (error) => {
          this.createEditError = error.error;
        }
      );
    }
  }
}
