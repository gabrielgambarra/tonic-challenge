import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  SimpleChanges,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserListData } from 'src/app/providers/models/UserListResponse.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'lastname', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Output('openInfo') openInfo = new EventEmitter();
  @Output('openEdit') openEdit = new EventEmitter();
  @Output('openDelete') openDelete = new EventEmitter();
  @Output('pageChange') pageChange = new EventEmitter();

  @Input('total') total!: number;
  @Input('dataSource') data!: UserListData[];
  dataSource = new MatTableDataSource<UserListData>();

  ngOnInit() {
    this.dataSource = new MatTableDataSource<UserListData>(this.data);
    this.total = this.total;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<UserListData>(this.data);
  }
}
