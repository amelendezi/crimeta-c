import { Component } from '@angular/core';
import { topMenuBarLogoUrl, topMenuBarLogoWidth, topMenuBarLogoHeight } from '../../../common/resources';

@Component({
    selector : 'app-logo',
    templateUrl : './app.component.logo.html',
    styleUrls : ['./app.component.logo.css']
})
export class LogoComponent{
    url = topMenuBarLogoUrl;
    width = topMenuBarLogoWidth;
    height = topMenuBarLogoHeight;
 }
