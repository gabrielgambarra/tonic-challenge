import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteUserModalComponent } from './delete-user-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DeleteUserModalComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [DeleteUserModalComponent],
})
export class DeleteUserModalModule {}
