import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  public info:any={};
  public cargada:boolean = false;

  constructor(public http:Http) { 
    this.http.get("assets/data/info.page.json")
    .subscribe(data=>{
      this.cargada = true;
      this.info=data.json();
    })
  }

}
