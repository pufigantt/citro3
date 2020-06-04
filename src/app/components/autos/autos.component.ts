import { Component, OnInit } from '@angular/core';
import { AutosService, Auto } from '../../servicios/autos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html'
})
export class AutosComponent implements OnInit {
  autos:Auto[] = [];
  constructor( private _autosService:AutosService,
               private router:Router   
    ) { console.log("constructor") 
  }
  ngOnInit() {
    this.autos = this._autosService.getAutos();
  }
  verAuto( idx:number ){
    this.router.navigate( ['/auto', idx] );
    console.log(idx);
  }
}
