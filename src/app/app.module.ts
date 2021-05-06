import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { LoginComponent } from './page/login/login.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { ListadoPaisesComponent } from './componentes/listado-paises/listado-paises.component';
import { ProductoDetalleComponent } from './componentes/producto-detalle/producto-detalle.component';
import { ListadoProductoComponent } from './componentes/listado-producto/listado-producto.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { ABMContainerComponent } from './componentes/abmcontainer/abmcontainer.component';
import { ListadoContainerComponent } from './componentes/listado-container/listado-container.component';
import { AltaContainerComponent } from './componentes/alta-container/alta-container.component';
import { ModificarContainerComponent } from './componentes/modificar-container/modificar-container.component';
import { BorrarContainerComponent } from './componentes/borrar-container/borrar-container.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    AltaProductoComponent,
    ListadoPaisesComponent,
    ProductoDetalleComponent,
    ListadoProductoComponent,
    DetalleProductoComponent,
    ABMContainerComponent,
    ListadoContainerComponent,
    AltaContainerComponent,
    ModificarContainerComponent,
    BorrarContainerComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
