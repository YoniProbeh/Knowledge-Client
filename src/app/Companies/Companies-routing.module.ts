import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesComponent } from './Companies.component';
import { SearchComponent } from '../Search/Search.component';

const routes: Routes = [
  { path: 'Companies', component: CompaniesComponent, children: [
    { path: '', component: SearchComponent },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
