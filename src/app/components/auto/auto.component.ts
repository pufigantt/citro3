import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html'
})
export class AutoComponent {

  constructor( private activatedRoute: ActivatedRoute ) {
  this.activatedRoute.params.subscribe( params => {
    console.log( params['id'] );
  })  
 }

//import { Component, OnInit } from '@angular/core';
// export class HeroeComponent implements OnInit 