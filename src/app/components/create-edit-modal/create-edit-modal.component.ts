import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateEditModalData } from 'src/app/providers/models/CreateEditModalData.model';
import { UserListData } from 'src/app/providers/models/UserListResponse.interface';
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
  constructor(@Inject(MAT_DIALOG_DATA) public data: CreateEditModalData) {
    super(UserListData);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.obj = { ...this.data.element };
  }

  dialogTitle = this.data.type === 'edit' ? 'Editar usuário' : 'Criar usuário';
}
