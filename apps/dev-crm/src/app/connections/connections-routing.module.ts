import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionDetailComponent } from './connection-detail/connection-detail.component';
import { ConnectionsComponent } from './connections/connections.component';

const routes: Routes = [
  { path: '', component: ConnectionsComponent },
  { path: ':id', component: ConnectionDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectionsRoutingModule {}
