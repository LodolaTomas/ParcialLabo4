import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {

  public listaProductos: any[];
  
  @Output() productoSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor(private productoService: ProductoService) {
    this.listaProductos=this.productoService.TraerTodos();
  }

  ngOnInit(): void {
  }

  selectProducto(producto) {
    this.productoSeleccionado.emit(producto);
  }

}
