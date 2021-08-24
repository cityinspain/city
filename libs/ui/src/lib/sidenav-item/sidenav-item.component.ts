import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'city-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
})
export class SidenavItemComponent implements OnInit {
  @Input() path: string | undefined;
  @Input() label: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
