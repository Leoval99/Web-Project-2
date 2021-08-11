import { Component } from '@angular/core';

import productos from '../assets/json/productos.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';
  productList:{titulo:string,descripcion:String,precio:[String]}[] = productos;
}
