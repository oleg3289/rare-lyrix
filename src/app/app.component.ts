import { Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, Renderer2, ElementRef, Inject, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DOCUMENT } from '@angular/common';
     
@Component({
    selector: 'app-root',
    templateUrl: 'app.template.html',
    // styleUrls: ['app.style.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
    private isMatMenuOpen: boolean = false;
    private cubeElems: ElementRef[] = null;

    @ViewChild(MatDrawer, {static: true}) private matDrawer: MatDrawer;
    
    constructor(
        @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2,
        private elemRef: ElementRef,
    ) {}

    public ngOnInit():void {
        this.cubeElems = this.elemRef.nativeElement.querySelectorAll('.cube');
        console.log(this.matDrawer.opened)
    }

    public initAnime():void {
        if (!this.matDrawer.opened) {
            this.cubeElems.forEach((item: ElementRef)=>{
                this.renderer.removeClass(item, 'rotateLeft');
                this.renderer.addClass(item, 'rotateRight');
            })
        } else {
            this.cubeElems.forEach((item: ElementRef)=>{
                this.renderer.removeClass(item, 'rotateRight');
                this.renderer.addClass(item, 'rotateLeft');
            })
        }
    }

    public openMenu():void {
        !this.matDrawer.opened ? this.matDrawer.open() : this.matDrawer.close();
    }

    public customClose(event):void {
        const target = event.target;
        if (this.matDrawer.opened && target.classList.contains('dark-layout')) {
            this.initAnime();
            this.matDrawer.close();
        }
    }
}