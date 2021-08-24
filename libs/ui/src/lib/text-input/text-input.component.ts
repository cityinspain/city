import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'city-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;

  public focused = false;

  constructor() {}

  ngOnInit(): void {}
}
