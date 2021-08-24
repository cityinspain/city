import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionsRoutingModule } from './connections-routing.module';
import { ConnectionsComponent } from './connections/connections.component';
import { IconsModule, UiModule } from '@city/ui';
import { ConnectionDetailComponent } from './connection-detail/connection-detail.component';

@NgModule({
  declarations: [ConnectionsComponent, ConnectionDetailComponent],
  imports: [CommonModule, ConnectionsRoutingModule, UiModule, IconsModule],
})
export class ConnectionsModule {}
