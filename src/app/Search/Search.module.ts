import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './Search.component';
import { SearchRoutingModule } from './Search-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class SearchModule { }
