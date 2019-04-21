import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { CompaniesComponent } from '../Companies/Companies.component';
import { ProceduresComponent } from '../Procedures/Procedures.component';
import { ProductsComponent } from '../Products/Products.component';
import { SoftwareComponent } from '../Software/Software.component';
import { SolutionsComponent } from '../Solutions/Solutions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Companies', component: CompaniesComponent },
  { path: 'Procedures', component: ProceduresComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'Software', component: SoftwareComponent },
  { path: 'Solutions', component: SolutionsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
