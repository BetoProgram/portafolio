import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  producto:any = {};

  constructor(private route:ActivatedRoute, private _ps:ProductosService) { 
    route.params.subscribe(param=>{
      _ps.cargar_productosId(param['id'])
      .subscribe(res=>{
        this.producto = res.json();
      })
    });

  }

  ngOnInit() {
  }

}
