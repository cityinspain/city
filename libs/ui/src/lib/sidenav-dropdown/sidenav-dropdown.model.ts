import { SidenavLink } from '../sidenav-item/sidenav-item.model';

export interface SidenavDropdown {
  label: string;
  children: SidenavLink[];
}
