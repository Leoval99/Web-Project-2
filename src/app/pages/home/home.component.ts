import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myScriptElement:HTMLScriptElement;

  constructor() {
    this.myScriptElement=document.createElement("script");
    this.myScriptElement.src ="https://cdn.jsdelivr.net/npm/keen-slider@5.5.0/keen-slider.min.js";
    document.body.appendChild(this.myScriptElement);
   }

  titulo = "Productos destacados";

  ngOnInit(): void {
  }

}