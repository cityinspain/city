import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionsRoutingModule } from './connections-routing.module';
import { ConnectionsComponent } from './connections/connections.component';
import { UiModule } from '@city/ui';

@NgModule({
  declarations: [ConnectionsComponent],
  imports: [CommonModule, ConnectionsRoutingModule, UiModule],
})
export class ConnectionsModule {}
