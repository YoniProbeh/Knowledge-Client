import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CompaniesModule } from './Companies/Companies.module';
import { MainModule } from './Main/Main.module';
import { ProceduresModule } from './Procedures/Procedures.module';
import { ProductsModule } from './Products/Products.module';
import { SoftwareModule } from './Software/Software.module';
import { SolutionsModule } from './Solutions/Solutions.module';

import { AppComponent } from './app.component';
import { StorageService } from 'src/assets/Services/Storage.service';
import { GlobalService } from 'src/assets/Services/Global.service';
import { SearchModule } from './Search/Search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CompaniesModule,
    MainModule,
    ProceduresModule,
    ProductsModule,
    SoftwareModule,
    SolutionsModule,
    SearchModule
  ],
  providers: [GlobalService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
