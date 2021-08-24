import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableConfig } from './table.model';

@Component({
  selector: 'city-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tableConfig: TableConfig | undefined;
  data = [{ id: 1, name: 'Billy', email: 'billy@billy.co' }];

  today = new Date();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onRowClick(row: any) {
    console.log(row);
    this.router.navigate(['/connections', row.id]);
  }
}
