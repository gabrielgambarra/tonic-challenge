import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/providers/models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  user: User | null = null;
  loading: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public userId: number,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    this.userService.getUserById(this.userId).subscribe((res) => {
      this.user = res.data;
    });
  }
}
