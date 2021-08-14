import { Component, OnInit, Input } from '@angular/core';

import productos from '../../../assets/json/destacados.json'

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {

  productList:{img:any,titulo:string,descripcion:String,precio:[String]}[] = productos;

  constructor() { }

  ngOnInit(): void {
  }

}
