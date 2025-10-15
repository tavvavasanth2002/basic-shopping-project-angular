import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  productForm:FormGroup=new FormGroup("")
  constructor(private fb:FormBuilder,private p:ProductsService){
    this.productForm=fb.group({
      productId:["",Validators.required],
      productName:["",Validators.required],
      productDescription:["",Validators.required],
      productPrice:["",Validators.required],
      productImage:["",Validators.required]
    })
  }

  addProducts(){
    console.log(this.productForm.value.productDescription)
    this.p.addproducts(this.productForm.value)
    alert("successfully added")
    this.productForm.reset();
  }
}
