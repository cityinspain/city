import { SidenavDropdown } from '../sidenav-dropdown/sidenav-dropdown.model';
import { SidenavLink } from '../sidenav-item/sidenav-item.model';

export interface SidenavConfig {
  items: SidenavItem[];
}

export interface SidenavItem {
  label: string;
  path?: string;
  children?: SidenavLink[];
}
