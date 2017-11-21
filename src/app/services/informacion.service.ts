import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  public info:any={};
  public equipo:any[]=[];
  public cargada:boolean = false;
  public cargada_sobre:boolean = false;

  constructor(public http:Http) { 
    this.carga_info();
    this.carga_sobre_nostros();
  }
  public carga_info(){
    this.http.get("assets/data/info.page.json")
    .subscribe(data=>{
      this.cargada = true;
      this.info=data.json();
    })
  }

  public carga_sobre_nostros(){
    this.http.get("https://portafolio-5ea28.firebaseio.com/equipo.json")
    .subscribe(data=>{
      this.cargada_sobre = true;
      this.equipo=data.json();
    })
  }

}
