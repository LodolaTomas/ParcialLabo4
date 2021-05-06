import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import{usuario} from '../clases/Usuario'
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  rutaDeLaColeccion = '/usuarios';
  referenciaAlaColeccion: AngularFirestoreCollection<usuario>;
  referenciaBd: AngularFirestore;

  constructor(private bd: AngularFirestore,private http: HttpClient) {
    this.referenciaBd = bd;
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
  }

  Crear(usuario: usuario): any {
    return this.referenciaAlaColeccion.add({ ...usuario });
  }

  public TraerTodos() {
    return this.referenciaAlaColeccion;
  }

  public BuscarUsuario(user: usuario) {
    return this.referenciaBd.collection(this.rutaDeLaColeccion, (ref) =>
      ref.where('email', '==', user.email).where('password', '==', user.password)
    );
  }

  public getProfileGitHub(){
    return this.http.get('https://api.github.com/users/LodolaTomas')
  }
}
