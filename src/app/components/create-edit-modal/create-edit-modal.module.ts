import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditModalComponent } from './create-edit-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CreateEditModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
  ],
  exports: [CreateEditModalComponent],
})
export class CreateEditModalModule {}
