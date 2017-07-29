import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ContainerComponent, TopMenuBarComponent, LogoComponent, TopMenuComponent } from './container/index';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ContainerComponent, TopMenuBarComponent, LogoComponent, TopMenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
