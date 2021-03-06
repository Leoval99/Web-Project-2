import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "tienda", component:TiendaComponent},
  {path: "nosotros", component:NosotrosComponent},
  {path: "contacto", component:ContactoComponent},
  {path: "producto", component:ProductoComponent},
  {path: "**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
