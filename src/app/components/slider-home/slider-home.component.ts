import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.css']
})
export class SliderHomeComponent implements OnInit {

  myScriptElement:HTMLScriptElement;

  constructor(private _CargarScripts:CargarScriptsService) {
    _CargarScripts.carga(["slider-home"]);

    this.myScriptElement=document.createElement("script");
    this.myScriptElement.src ="https://cdn.jsdelivr.net/npm/keen-slider@5.5.0/keen-slider.min.js";
    document.body.appendChild(this.myScriptElement);
  }

  ngOnInit(): void {
  }

}