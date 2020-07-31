import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Producto } from "../../models/producto";

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../redux/votos.actions';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.scss']
})
export class Hijo1Component implements OnInit {

  @Input()
  listaHijo: Producto;

  @HostBinding('attr.class') cssClass = 'list-group-item';

  count$: Observable<number>;
 
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  delete() {}

}
