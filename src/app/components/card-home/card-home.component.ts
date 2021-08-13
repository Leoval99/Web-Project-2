import { Component, OnInit, Input } from '@angular/core';

import productos from '../../../assets/json/productos.json'

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {

  productList:{img:any,titulo:string,descripcion:String,precio:[String]}[] = productos;

  constructor() { }
 
  @Input () imagen = "../../../assets/img/1.jpg";
  @Input () titulo = "titulo";
  @Input () descripcion = "descripcion";
  @Input () precio = 50000;

  ngOnInit(): void {
  }

}
