import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { VanillaModule } from './vanilla/vanilla.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule,
        VanillaModule,
        BrowserAnimationsModule,
        MatSidenavModule        
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }