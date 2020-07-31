import { Component, OnInit } from '@angular/core';
import { Producto } from "../../models/producto";

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {

  listaPadre: Producto[];

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {

    this.count$ = store.pipe(select('count'));

    this.listaPadre = [
      {
        nombre: 'Producto A',
        estado: 'Agotado',
        cantidad: 0,
        votos: 0,
      },
      {
        nombre: 'Producto B',
        estado: 'Agotado',
        cantidad: 0,
        votos: 0,
      },
      {
        nombre: 'Producto C',
        estado: 'Agotado',
        cantidad: 0,
        votos: 0,
      }
    ]

  }

  ngOnInit(): void {
  }

  procesaAgregar(productoPadre:Producto) {
    this.listaPadre.push(
      {
        nombre: productoPadre.nombre.toUpperCase(),
        estado: productoPadre.estado.toUpperCase(),
        cantidad: productoPadre.cantidad,
        votos: 0,
      }
    );
  }

}
