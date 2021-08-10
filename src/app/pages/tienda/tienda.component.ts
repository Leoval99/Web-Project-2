import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  constructor() { }

  titulo = "Tienda";

  cards=[
    {
      imagen: "../../../assets/img/1.jpeg",
      titulo: "Torta Chocolate",
      precio: 3000
    },
    {
      imagen: "../../../assets/img/2.jpeg",
      titulo: "Torta Vainilla",
      precio: 3100
    },
    {
      imagen: "../../../assets/img/3.jpeg",
      titulo: "Torta MIX",
      precio: 3200
    },
    {
      imagen: "../../../assets/img/4.jpeg",
      titulo: "Torta Chocolate 2",
      precio: 3300
    },
    {
      imagen: "../../../assets/img/1.jpeg",
      titulo: "Torta Vainilla 2",
      precio: 3400
    },
    {
      imagen: "../../../assets/img/2.jpeg",
      titulo: "Torta MIX 2",
      precio: 3500
    },
    {
      imagen: "../../../assets/img/3.jpeg",
      titulo: "Torta Chocolate 2",
      precio: 3300
    },
    {
      imagen: "../../../assets/img/4.jpeg",
      titulo: "Torta Vainilla 2",
      precio: 3400
    },
    {
      imagen: "../../../assets/img/1.jpeg",
      titulo: "Torta MIX 2",
      precio: 3500
    }
  ]

  ngOnInit(): void {
  }

}
