import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisService } from 'src/app/servicio/pais.service';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent implements OnInit {
  public listaPaises: any[];
  @Output() paisSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  constructor(private paisesService: PaisService) {
    this.listaPaises=this.paisesService.getPaises();
  }

  ngOnInit(): void {
  }
  selectPais(pais) {
    this.paisSeleccionado.emit(pais);
  }

}
