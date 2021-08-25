import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';
import { SidenavDropdownComponent } from './sidenav-dropdown/sidenav-dropdown.component';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TableComponent } from './table/table.component';
import { PeopleTableComponent } from './people-table/people-table.component';
import { PillComponent } from './pill/pill.component';
import { TextInputComponent } from './forms/text-input/text-input.component';
import { CheckboxComponent } from './forms/checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  declarations: [
    SidenavItemComponent,
    SidenavDropdownComponent,
    SidenavComponent,
    TableComponent,
    PeopleTableComponent,
    PillComponent,
    TextInputComponent,
    CheckboxComponent,
  ],
  exports: [
    SidenavItemComponent,
    SidenavDropdownComponent,
    SidenavComponent,
    TableComponent,
    PeopleTableComponent,
    PillComponent,
    TextInputComponent,
    CheckboxComponent,
  ],
})
export class UiModule {}
