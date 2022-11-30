import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProductCreatComponent } from './admin/product-creat/product-creat.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { ProductComponent } from './admin/product/product.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
{path:'mian',component:MainComponent},
{path:'',component:MainComponent},
{path:'admin',component:AdminComponent,
children:[
  {path:'product',component:ProductComponent},
  {path:'product-creat',component:ProductCreatComponent},
  {path:'product-edit',component:ProductEditComponent}
  
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
