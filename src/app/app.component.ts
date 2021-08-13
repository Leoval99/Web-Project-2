import { Component } from '@angular/core';

import productos from '../assets/json/productos.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';
  productList:{titulo:string,descripcion:String,precio:[String]}[] = productos;
  myScriptElement:HTMLScriptElement;
  constructor(){
    this.myScriptElement=document.createElement("script");
    this.myScriptElement.src ="https://cdn.jsdelivr.net/npm/keen-slider@5.5.0/keen-slider.min.js";
    document.body.appendChild(this.myScriptElement);
  }
}
