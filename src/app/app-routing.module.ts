import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './page/bienvenido/bienvenido.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { LoginComponent } from './page/login/login.component';
import { ProductoDetalleComponent } from './componentes/producto-detalle/producto-detalle.component';
import { ABMContainerComponent } from './componentes/abmcontainer/abmcontainer.component';

const routes: Routes = [
  {path:'bienvenida',component:BienvenidoComponent},
  {path:'altaProducto',component:AltaProductoComponent},
  {path:'productoDetalle',component:ProductoDetalleComponent},
  {path:'login',component:LoginComponent},
  {path:'ABMContainer',component:ABMContainerComponent},
  {path :'',redirectTo:'bienvenida', pathMatch:"full"},
  {path :'**',redirectTo:'busqueda', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
