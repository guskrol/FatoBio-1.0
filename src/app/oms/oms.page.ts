import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-oms',
  templateUrl: './oms.page.html',
  styleUrls: ['./oms.page.scss'],
})
export class OmsPage {

  constructor(private browser : InAppBrowser){}

  openUrl(){
    this.browser.create('https://www.who.int/eportuguese/countries/bra/pt/')
  }
}
 


