import { Component } from '@angular/core';
import {
    topMenuBarTopMenuHomeUrl,
    topMenuBarTopMenuAboutUrl,
    topMenuBarTopMenuItemWidth,
    topMenuBarTopMenuItemHeigh
} from '../../../common/resources';

@Component({
    selector: 'app-topmenu',
    templateUrl: './app.component.topmenu.html',
    styleUrls: ['./app.component.topmenu.css']
})
export class TopMenuComponent {
    /** Home URL */
    homeUrl = topMenuBarTopMenuHomeUrl;

    /** About Url */
    aboutUrl = topMenuBarTopMenuAboutUrl;

    width = topMenuBarTopMenuItemWidth;
    height = topMenuBarTopMenuItemHeigh;
}
