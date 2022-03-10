import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppAngularComponent } from './app.component';
@NgModule({
  declarations: [
    AppAngularComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [],
  bootstrap: [AppAngularComponent]
})
export class AppAngularModule{}
