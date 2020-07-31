import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {

  data:string[];

  constructor() {
    this.data = [
      'Copyright 2020',
      'Jimmy Alberto Mata Brenes',
      'Cartago, Costa Rica'
    ]
  }

  ngOnInit(): void {
  }

}
