import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from "../../models/producto";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.scss']
})
export class Hijo2Component implements OnInit {

  @Output()
  agregar = new EventEmitter<Producto>();

  productoHijo: Producto;

  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      nombreProducto: [
        '', 
        [Validators.required, Validators.minLength(10)]
      ],
      cantidadProducto: ['', this.validateCantidad],
    });
  }

  onAgregar() {
    let cantidadProducto: number;
    let estadoProducto: string;
    let formData = this.formGroup.value;
    if (formData.cantidadProducto > 0) {
      cantidadProducto = formData.cantidadProducto;
      estadoProducto = 'Disponible';
    } else {
      cantidadProducto = 0;
      estadoProducto = 'Agotado';
    }
    this.productoHijo = {
      nombre: formData.nombreProducto,
      estado: estadoProducto,
      cantidad: cantidadProducto,
      votos: 0,
    }
    this.agregar.emit(this.productoHijo);
    this.formGroup.reset();
    return false;
  }

  private validateCantidad(control) {
    const cantidad = control.value;
    let error = null;
    if (cantidad < 0) {
      error = { ...error, negativo: 'No puede ser menor que cero' };
    }
    return error;
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
    // on htmml add:
    // <small id="nombreProductoHelp" class="form-text text-muted">{{ getError('nombreProducto') }}</small>
  }

}
