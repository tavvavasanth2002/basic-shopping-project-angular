import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ViewProductComponent } from './component/view-product/view-product.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { DeleteProductComponent } from './component/delete-product/delete-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavabarComponent } from './component/navabar/navabar.component';
import { ManageProductsComponent } from './component/manage-products/manage-products.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewProductComponent,
    AddProductComponent,
    DeleteProductComponent,
    NavabarComponent,
    ManageProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
