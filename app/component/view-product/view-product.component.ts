import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent {
  constructor(private p:ProductsService){}
  products:any
  ngOnInit(){
    this.p.getProducts().subscribe((data)=>{
      this.products=data;
    })
  }
}
