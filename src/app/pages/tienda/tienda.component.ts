import { Component, OnInit } from '@angular/core';

import productos from '../../../assets/json/productos.json'

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  productList:{titulo:string,descripcion:String,precio:[String]}[] = productos;

  constructor() { }

  titulo = "Tienda";

  cards=[
    {
      imagen: "../../../assets/img/1.jpeg",
    },
    {
      imagen: "../../../assets/img/2.jpeg",
    },
    {
      imagen: "../../../assets/img/3.jpeg",
    },
    {
      imagen: "../../../assets/img/4.jpeg",
    }
  ]

  ngOnInit(): void {
  }

}
