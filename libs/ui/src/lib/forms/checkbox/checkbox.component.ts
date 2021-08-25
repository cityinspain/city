import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'city-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() inline: boolean;
  @Input() label: string;

  constructor() {}

  ngOnInit(): void {}
}
