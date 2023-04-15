import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-switch',
  templateUrl: './flip-switch.component.html',
  styleUrls: ['./flip-switch.component.css']
})
export class FlipSwitchComponent implements OnInit {

  @Input() idCreacion: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
