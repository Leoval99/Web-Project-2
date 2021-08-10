import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  titulo = "Productos destacados";

  cards=[
    {
      imagen: "../../../assets/img/1.jpeg",
      titulo: "Torta Chocolate",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sit optio inventore unde dolorum minus, cupiditate alias ipsum voluptatum excepturi omnis repellat! Vel, ratione? Sequi magni rerum ratione fuga ab!",
      precio: 3000
    },
    {
      imagen: "../../../assets/img/2.jpeg",
      titulo: "Torta Vainilla",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sit optio inventore unde dolorum minus, cupiditate alias ipsum voluptatum excepturi omnis repellat! Vel, ratione? Sequi magni rerum ratione fuga ab!",
      precio: 3100
    },
    {
      imagen: "../../../assets/img/3.jpeg",
      titulo: "Torta MIX",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sit optio inventore unde dolorum minus, cupiditate alias ipsum voluptatum excepturi omnis repellat! Vel, ratione? Sequi magni rerum ratione fuga ab!",
      precio: 3200
    },
    {
      imagen: "../../../assets/img/4.jpeg",
      titulo: "Torta Chocolate 2",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sit optio inventore unde dolorum minus, cupiditate alias ipsum voluptatum excepturi omnis repellat! Vel, ratione? Sequi magni rerum ratione fuga ab!",
      precio: 3300
    }
  ]

  ngOnInit(): void {
  }

}