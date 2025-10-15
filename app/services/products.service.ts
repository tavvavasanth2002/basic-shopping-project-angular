import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
  {
    productId: "P001",
    productName: "Samsung Galaxy Z Fold7",
    productDescription: "Snapdragon 8 Gen 3, 12GB RAM, 256GB ROM",
    productPrice: "174,999",
    productImage: "https://th.bing.com/th/id/OIP.r65MJ_LDjGrOeeof2wnuYAHaE8?w=279&h=186&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3"  },
  {
    productId: "P002",
    productName: "Samsung Galaxy Z Flip7",
    productDescription: "Exynos 2500 Deca Core, 12GB RAM, 256GB ROM",
    productPrice: "109,999",
    productImage: "https://th.bing.com/th/id/OIP.9B5xGQ5MbISoAz6T40lEYgHaFT?w=216&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3"  },
  {
    productId: "P003",
    productName: "Motorola Edge 60 Pro",
    productDescription: "Snapdragon 8 Gen 2, 12GB RAM, 256GB ROM",
    productPrice: "49,999",
    productImage: "https://th.bing.com/th/id/OIP.AhBqovGtO5W4dA_j2ZfsgAHaGV?w=203&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3"  },
  {
    productId: "P004",
    productName: "OPPO F31 Pro Plus",
    productDescription: "MediaTek Dimensity 9200+, 8GB RAM, 128GB ROM",
    productPrice: "34,999",
    productImage: "https://th.bing.com/th/id/OPAC.ulzoYhFkVw8emQ474C474?w=220&h=220&c=17&o=5&cb=12&dpr=1.3&pid=21.1"  }
];
ind:any;
  constructor() {

   }
   getProducts(){
    return of(this.products)
   }
   addproducts(add:any){
    this.products.push(add);
   }
   deleteProducts(del:any){
    this.ind=this.products.findIndex((i)=>i.productId==del)
    if(this.ind>=0){
    this.products.splice(this.ind,1);
    alert("Deleted the successfully");
    }
    else{
      alert("Check the Product");
    }

   }
   updateProducts(dummy:any){
    let ind=this.products.findIndex((i)=>i.productId==dummy.productId)
    if(ind>=0){
      this.products.splice(ind,1,dummy);
      return "Update Successfully"
    }
    else{
      return "ERROR"
    }
   }
}
