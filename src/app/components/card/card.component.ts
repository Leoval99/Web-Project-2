import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
 
  @Input () imagen = "../../../../assets/img/1.jpeg";
  @Input () titulo = "titulo";
  @Input () precio = 50000;

  ngOnInit(): void {
  }

}
