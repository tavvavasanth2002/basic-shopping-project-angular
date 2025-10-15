import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent {
  
  deleteForm:FormGroup=new FormGroup("")
  constructor(private fb:FormBuilder, private p:ProductsService){
    this.deleteForm=fb.group({
      productId:["",Validators.required]
    })
  }
  deleteProd(){
    this.p.deleteProducts(this.deleteForm.value.productId)
  }
}
