import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit{

  lista:string[]=['--Selecione--', '2020', '2021', '2022', '2023'];
  seleccionado:string = '--Selecione--';
  activar:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  genereteComponent(): void{
    if(this.seleccionado=='--Selecione--'){
      this.activar=false;
      return;
    }
    this.activar=true;
  }
}
