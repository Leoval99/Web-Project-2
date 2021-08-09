import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderHomeComponent } from './components/slider-home/slider-home.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { CardComponent } from './components/card/card.component';
import { TitleComponent } from './components/title/title.component';
import { WhatsComponent } from './components/whats/whats.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SliderHomeComponent,
    SliderComponent,
    CardHomeComponent,
    CardComponent,
    TitleComponent,
    WhatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
