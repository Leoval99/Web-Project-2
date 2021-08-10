import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.css']
})
export class SliderHomeComponent implements OnInit {

  constructor(private _CargarScripts:CargarScriptsService) {
   _CargarScripts.carga(["./../../../assets/js/slider"]);
  }

  ngOnInit(): void {
  }

}
