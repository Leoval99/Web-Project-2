import { Component, OnInit, Input } from '@angular/core';

import productos from '../../../assets/json/productos.json'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  productList:{img:any,titulo:string,descripcion:String,precio:[String]}[] = productos;

  constructor() { }
 
  // @Input () imagen = "../../../../assets/img/1.jpeg";
  // @Input () titulo = "titulo";
  // @Input () precio = 50000;

  ngOnInit(): void {
  }

}
