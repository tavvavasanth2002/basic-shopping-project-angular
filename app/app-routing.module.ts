import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { NavabarComponent } from './component/navabar/navabar.component';
import { ViewProductComponent } from './component/view-product/view-product.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { DeleteProductComponent } from './component/delete-product/delete-product.component';
import { ManageProductsComponent } from './component/manage-products/manage-products.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"navabar",component:NavabarComponent,
    children:[
      {path:"viewProduct",component:ViewProductComponent},
      {path:"addProduct",component:AddProductComponent},
      {path:"deleteProduct",component:DeleteProductComponent},
      {path:"manageProduct",component:ManageProductsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
