import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JokesService } from '../../services/jokes.service';
import { FakeproductsService } from '../../services/fakeproducts.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent {
  
  deleteForm:FormGroup=new FormGroup("")
  constructor(private fb:FormBuilder, private p:ProductsService, private joke:JokesService, private prod:FakeproductsService){
    this.deleteForm=fb.group({
      productId:["",Validators.required]
    })
  }
  deleteProd(){
    this.p.deleteProducts(this.deleteForm.value.productId)
  }
  j:any;
  ja:any;
  ngOnInit(){
    this.joke.getjokes().subscribe((data) => {
  this.j = data;
  console.log(this.j); 
});
  this.prod.getproducts().subscribe((data)=>{
    this.ja=data;
    console.log(this.ja);
  })
  
  }
}
