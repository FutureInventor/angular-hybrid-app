import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import AppJS from './appJs.module';
import { AppAngularModule } from './app/app.module';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ]
})
export class AppModule implements DoBootstrap {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [AppJS.name], { strictDi: true });
  }
}

//bootstrap angularJs module
platformBrowserDynamic().bootstrapModule(AppModule);

//bootstrap new angular module
platformBrowserDynamic().bootstrapModule(AppAngularModule);