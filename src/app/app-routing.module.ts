import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
<<<<<<< HEAD
=======
  // {path: 'login', component:LoginComponent},
  // {path:'detail', component:ProductDetailComponent,pathMatch: 'full'},
  // {path:'shop',component:ShopComponent}
  
>>>>>>> 942a6f758fb01383b7d46400109d34b31ea7d8fa
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
