import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _CargarScripts:CargarScriptsService) {
   _CargarScripts.carga(["nav"]);
  }

  ngOnInit(): void {
  }

}
