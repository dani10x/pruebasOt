import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-detallada',
  templateUrl: './info-detallada.component.html',
  styleUrls: ['./info-detallada.component.css']
})
export class InfoDetalladaComponent implements OnInit {

  modeloCheck: boolean = false;
  tipoCheck: boolean = false;
  claseCheck: boolean = false;
  nivelCheck: boolean = false;
  pasajerosCheck: boolean = false;
  capacidadCheck: boolean = false;
  placasCheck: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  activar(check: string): void {
    switch (check) {
      case '1': this.modeloCheck = !this.modeloCheck; break;
      case '2': this.tipoCheck = !this.tipoCheck; break;
      case '3': this.claseCheck = !this.claseCheck; break;
      case '4': this.nivelCheck = !this.nivelCheck; break;
      case '5': this.pasajerosCheck = !this.pasajerosCheck; break;
      case '6': this.capacidadCheck = !this.capacidadCheck; break;
      case '7': this.placasCheck = !this.placasCheck; break;
      default : break;
    }
  }

}
