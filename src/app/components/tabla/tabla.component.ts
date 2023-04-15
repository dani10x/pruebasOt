import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  titulo:string='';
  activeFiltro:boolean=false;
  lista:any=[];

  constructor() { }

  ngOnInit(): void {
  }

}
