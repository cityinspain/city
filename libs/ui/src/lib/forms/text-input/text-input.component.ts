import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'city-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() placeholder: string;

  onChange: any = () => {};
  onTouch: any = () => {};
  _value: string = '';

  public focused = false;

  constructor() {}
  writeValue(obj: any): void {
    this._value = obj;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  public get value() {
    return this._value;
  }

  public set value(v) {
    this._value = v;
    this.onChange(this._value);
    this.onTouch();
  }
}
