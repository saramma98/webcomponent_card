import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';

import { BcardComponent } from './bcard/bcard.component';

@NgModule({
  declarations: [

    BcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [BcardComponent],
  providers: [],
 
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(BcardComponent, {injector: injector});
    customElements.define('app-bcard', custom);
  }
  ngDoBootstrap() {}
 }
