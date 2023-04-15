import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-general',
  templateUrl: './info-general.component.html',
  styleUrls: ['./info-general.component.css']
})
export class InfoGeneralComponent implements OnInit{

  @Input() anio: string = '';

  salario2020: string = '950.000';
  salario2021: string = '1.000.000';
  salario2022: string = '1.050.000';
  salario2023: string = '1.100.000';
  salario: string = '';

  seleccionado: string = '--Seleccione--';
  active: boolean = false;
  active2: boolean = false;

  constructor() { }
  ngOnInit(): void {
  }

  insertarSalario(): void {
    if (this.seleccionado == '1') {
      switch (this.anio) {
        case '2020': this.salario = this.salario2020; break;
        case '2021': this.salario = this.salario2021; break;
        case '2022': this.salario = this.salario2022; break;
        case '2023': this.salario = this.salario2023; break;
        default: break;
      }
      this.active = true;
    }
    else {
      this.active = false;
    }
  }

  changeComponent(): void {
    this.active2=!this.active2;
  }

}
