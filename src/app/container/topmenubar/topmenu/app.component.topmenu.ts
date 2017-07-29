import { Component } from '@angular/core';

@Component({
    selector: 'app-topmenu',
    templateUrl: './app.component.topmenu.html',
    styleUrls: ['./app.component.topmenu.css']
})
export class TopMenuComponent {
    handleClick = (option: string): void => {
        switch (option) {
            case 'management': console.log('Clicked Management');
                break;
            case 'dashboards': console.log('Clicked Dasboards');
                break;
            case 'settings': console.log('Clicked Settings');
                break;
            case 'about': console.log('Clicked About');
                break;
        }
    }
}
