import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {

  lista:any[]=[{filtro:['Tipo de servicio', 'Clase vehiculo', 'Modelo', 'Rango placas'], detalle:['Particular', 'Camioneta', '2000', '000-111'], valorSMVL:'0.9', fechaVencimiento:'30/12/2022', estado:'1'}, {filtro:['Tipo de servicio'], detalle:['Especial'], valorSMVL:'0.8', fechaVencimiento:'20/12/2022', estado:'2'}];
  activeFiltro:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
