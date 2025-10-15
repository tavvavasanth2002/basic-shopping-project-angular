import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { DeleteProductComponent } from '../delete-product/delete-product.component';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.css'
})
export class ManageProductsComponent {
  constructor(private p:ProductsService){}
  product:any
  ngOnInit(){
    this.p.getProducts().subscribe((d)=>
    {
      this.product=d;
    })
  }
  result:any;
  update={
    productId:"",
    productName:"",
    productDescription:"",
    productPrice:"",
    productImage:""
  }
  updated(prod:any){
    this.update={...prod}
  }
  updateProduct(dummy:any){
    this.result=this.p.updateProducts(dummy);
    alert(this.result)
  }
  deleteProduct(pid:any){
    this.p.deleteProducts(pid);
  }
}
