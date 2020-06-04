import { Injectable } from '@angular/core';

@Injectable()
export class AutosService {
       private autos:Auto[] = [
     {
      nombre: "DS 3 CROSSBACK",
      precio: "17.990.000",
      dscto:  "10%",
      oferta: "16.190.000",
      img: "assets/images/autods3.png"
    },
    {
      nombre: "DS 7 CROSSBACK",
      precio: "$ 24.490.000",
      dscto:  "10%",
      oferta: "22.041.000",
      img: "assets/images/autods7.png"
    },
    {
      nombre: "DS 5 CROSSBACK",
      precio: "19.490.000",
      dscto:  "10%",
      oferta: "17.541.000",
      img: "assets/images/autods5.png"
    } 
  ];
  constructor() { 
    console.log("Servicio listo para usar!!!");
  }
  getAutos():Auto[]{
  return this.autos;
   }
   
}
export interface Auto{
  nombre: string;
  precio: string;
  dscto:  string;
  oferta: string;
  img: string;
};