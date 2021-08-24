import { Component, Input, OnInit } from '@angular/core';
import { SidenavConfig } from './sidenav.model';

@Component({
  selector: 'city-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() sidenavConfig: SidenavConfig | undefined;

  open = true;

  constructor() {}

  ngOnInit(): void {}
}
