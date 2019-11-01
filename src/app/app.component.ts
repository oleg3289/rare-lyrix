import { Component, ChangeDetectionStrategy } from '@angular/core';
     
@Component({
    selector: 'my-app',
    templateUrl: 'app.template.html',
    styleUrls: ['app.style.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent { 
    
    constructor() {
        
    }
}