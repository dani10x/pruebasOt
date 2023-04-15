import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {

  lista: any[] = [];
  lista2: any[] = [{ metodo: 'Valor fijo', estado: 'Inactivo' }, { metodo: 'Salario mínimo', estado: 'Activo' }, { metodo: 'Valor fijo', estado: 'Activo' }, { metodo: 'Valor fijo', estado: 'Activo' } , { metodo: 'Valor fijo', estado: 'Activo' }];
  active:boolean=false;
  activeFiltro:boolean=false;

  @Input() anio:string='';

  constructor() { }

  ngOnInit(): void {
    function getRandomInt() {
      return Math.floor(Math.random() * 5);
    }

    for(let i=0; i<getRandomInt(); i++){
      this.lista.push(this.lista2.pop());
    }
  }

  genereteComponent(): void{
    this.active=!this.active;
  }

}
