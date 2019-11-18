import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { VanillaModule } from './vanilla/vanilla.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { APP_ROUTING } from './app.routing';

@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule,
        VanillaModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        RouterModule.forRoot(APP_ROUTING)     
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }