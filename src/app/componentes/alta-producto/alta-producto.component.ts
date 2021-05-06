import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/clases/producto';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {
  token: any;
  public flag = false;
  unProducto: Producto;
  productoForm: FormGroup;
  checked:string;
  constructor(private fb: FormBuilder,
    private router: Router,
    private srvProducto:ProductoService) {
      this.unProducto=new Producto();
      this.unProducto.paisDeOrigen=null;
     }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if (this.token == null) {
      this.router.navigateByUrl("login");
    }
  }

  getPaisSelected(pais:any){
    this.unProducto.paisDeOrigen=pais;
  }
  altaProducto() {
    if(this.checked=="true"){
      this.unProducto.comestible=true;
    }else{
      this.unProducto.comestible=false;
    }
    this.srvProducto.Crear(this.unProducto);
    this.unProducto=null;
  }


}
