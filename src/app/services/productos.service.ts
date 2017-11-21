import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {
  productos:any[]=[];
  cargando:boolean= true;
  constructor(private http:Http) { 
    this.cargar_productos();
  }

  public cargar_productos(){
    this.cargando = true;
    if(this.productos.length===0){
      this.http.get("https://portafolio-5ea28.firebaseio.com/productos_idx.json")
      .subscribe(data=>{
        this.productos=data.json();
        console.log(this.productos);
        this.cargando = false;
      })
    }
  }

}
