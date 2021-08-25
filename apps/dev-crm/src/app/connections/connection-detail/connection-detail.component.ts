import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'city-connection-detail',
  templateUrl: './connection-detail.component.html',
  styleUrls: ['./connection-detail.component.scss'],
})
export class ConnectionDetailComponent implements OnInit {
  test = new FormControl('foo');

  @Input() connectionId: number;
  focused = false;

  constructor() {
    this.test.valueChanges.subscribe((res) => console.log('change: ', res));
  }

  ngOnInit(): void {}
}
