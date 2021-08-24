import { Component, OnInit } from '@angular/core';
import { TableConfig } from 'libs/ui/src/lib/table/table.model';

@Component({
  selector: 'city-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss'],
})
export class ConnectionsComponent implements OnInit {
  today = new Date();

  tableConfig: TableConfig = {
    columns: ['Name', 'Email', 'Last Contact'],
    rows: [['Frank', 'frank@frank.frank', 'yesterday']],
  };

  constructor() {}

  ngOnInit(): void {}
}
