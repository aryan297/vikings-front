import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GateComponent } from './gate/gate.component';
import { OfflineComponent } from './offline/offline.component';
import { ServerComponent } from './server/server.component';

const routes: Routes = [
  {path:'offline',component:OfflineComponent},
  {path:'',component:GateComponent},
  {path:'server',component:ServerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
