import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CargarScriptsService } from './cargar-scripts.service';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { CardComponent } from './components/card/card.component';
import { TitleComponent } from './components/title/title.component';
import { WhatsComponent } from './components/whats/whats.component';
import { BtnComponent } from './components/btn/btn.component';
import { SliderHomeComponent } from './components/slider-home/slider-home.component';
import { HomeComponent } from './pages/home/home.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductoComponent } from './pages/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SliderComponent,
    CardHomeComponent,
    CardComponent,
    TitleComponent,
    WhatsComponent,
    BtnComponent,
    SliderHomeComponent,
    HomeComponent,
    TiendaComponent,
    ContactoComponent,
    NosotrosComponent,
    NotfoundComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
