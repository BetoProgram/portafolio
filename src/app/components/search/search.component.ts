import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  constructor(private route:ActivatedRoute, public _ps:ProductosService) { 

    route.params.subscribe(parametros=>{
      this._ps.busquedaProductos(parametros['termino']);  
    });
  }

}
