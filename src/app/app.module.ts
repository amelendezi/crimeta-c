import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ContainerComponent, TopMenuBarComponent, LogoComponent } from './container/index';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ContainerComponent, TopMenuBarComponent, LogoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
