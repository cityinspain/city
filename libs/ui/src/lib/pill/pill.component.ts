import { Component, Input, OnInit } from '@angular/core';
import { TailwindColor } from '@city/types';
@Component({
  selector: 'city-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss'],
})
export class PillComponent {
  @Input() label: string;
  @Input() color: TailwindColor;

  // constructor() {}
}
