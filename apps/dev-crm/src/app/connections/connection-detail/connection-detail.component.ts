import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'city-connection-detail',
  templateUrl: './connection-detail.component.html',
  styleUrls: ['./connection-detail.component.scss'],
})
export class ConnectionDetailComponent implements OnInit {
  @Input() connectionId: number;
  focused = false;

  constructor() {}

  ngOnInit(): void {}
}
