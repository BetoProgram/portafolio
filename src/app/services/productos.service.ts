import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {
  productos:any[]=[];
  productosFiltrado:any[]=[];
  cargando:boolean= true;
  constructor(private http:Http) { 
    this.cargar_productos();
  }

  public cargar_productos(){
    this.cargando = true;
    let promesa = new Promise((resolve, reject) => {
      this.http.get("https://portafolio-5ea28.firebaseio.com/productos_idx.json")
      .subscribe(data=>{
          this.cargando = false;
          this.productos=data.json();
          resolve();
        })
    });
    return promesa;
  }

  

  public cargar_productosId(idx:number){
      return this.http.get(`https://portafolio-5ea28.firebaseio.com/productos/${idx}.json`)
  }

  public busquedaProductos(termino:string){
    if(this.productos.length===0){
      this.cargar_productos().then(()=>{
        //termino la carga
        this.filtrarProductos(termino);
      })
    }else{
      this.filtrarProductos(termino);
    }
  }

  public filtrarProductos(termino:string){
    this.productosFiltrado = [];
    termino = termino.toLowerCase();
    this.productos.forEach((prod)=>{
      if(prod.categoria.indexOf(termino)>0 || prod.titulo.toLowerCase().indexOf(termino)>0 ){
        this.productosFiltrado.push(prod);
      }
    })
  }

}
