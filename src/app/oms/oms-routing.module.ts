import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmsPage } from './oms.page';

const routes: Routes = [
  {
    path: '',
    component: OmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OmsPageRoutingModule {}
