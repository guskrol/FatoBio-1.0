import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { OmsPageRoutingModule } from './oms-routing.module';

import { OmsPage } from './oms.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  imports: [ CommonModule,FormsModule, IonicModule, OmsPageRoutingModule],
  declarations: [OmsPage],
  providers:[InAppBrowser],
})
export class OmsPageModule {}
