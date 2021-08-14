import { Component, OnInit } from '@angular/core';
import { GatitoService } from 'src/app/gatito.service';


@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(
    private gatitoService:GatitoService

  ) { }
  datita: any;

  showKittens (){
    this.gatitoService.getKittens()
    .subscribe((data:any)=>{
      console.log(data);
      //data tiene el problema scope,     arreglo  con datita
      this.datita = data;
    })
  }
  ngOnInit(): void {
    this.showKittens();
  }

}
