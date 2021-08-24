import { Component, Input, OnInit } from '@angular/core';
import { SidenavLink } from '../sidenav-item/sidenav-item.model';

@Component({
  selector: 'city-sidenav-dropdown',
  templateUrl: './sidenav-dropdown.component.html',
  styleUrls: ['./sidenav-dropdown.component.scss'],
})
export class SidenavDropdownComponent implements OnInit {
  @Input() label: string | undefined;
  @Input() children: SidenavLink[] = [];

  open = false;

  constructor() {}

  ngOnInit(): void {}
}
