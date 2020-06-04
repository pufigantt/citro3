import { Component } from '@angular/core';

@Component({
    selector: 'app-citro',
    templateUrl: './citro.component.html'
})

export class CitroComponent {
    anio: number;
    constructor(){
    this.anio = new Date().getFullYear();
    }
}