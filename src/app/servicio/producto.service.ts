import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  rutaDeLaColeccion = '/productos';
  referenciaAlaColeccion: AngularFirestoreCollection<Producto>;
  referenciaBd: AngularFirestore;
  productos: any[] = [];
  constructor(private bd: AngularFirestore) {
    this.referenciaBd = bd;
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
    this.referenciaAlaColeccion.valueChanges().subscribe(data=>{
      data.forEach(element => {
        this.productos.push(element)
      });
    })
  }

  Crear(producto: Producto): any {
    return this.referenciaAlaColeccion.add({ ...producto });
  }
  public TraerTodos() {
    return this.productos;
  }
}
