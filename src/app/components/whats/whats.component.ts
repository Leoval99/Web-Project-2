import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-whats',
  templateUrl: './whats.component.html',
  styleUrls: ['./whats.component.css']
})
export class WhatsComponent implements OnInit {

  constructor(private _CargarScripts:CargarScriptsService) {
   _CargarScripts.carga(["./../../../assets/js/whats"]);
  }

  ngOnInit(): void {
  }

}
