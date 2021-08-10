import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {

  constructor() { }
 
  @Input () imagen = "../../../assets/img/1.jpg";
  @Input () titulo = "titulo";
  @Input () descripcion = "descripcion";
  @Input () precio = 50000;

  ngOnInit(): void {
  }

}
