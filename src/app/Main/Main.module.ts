import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BreadcrumbComponent } from './Breadcrumb/Breadcrumb.component';
import { FooterComponent } from './Footer/Footer.component';
import { HomeComponent } from './Home/Home.component';
import { MainRoutingModule } from './Main-routing.module';
import { MainComponent } from './Main.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { SidenavComponent } from './Sidenav/Sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MainRoutingModule,
    PanelMenuModule,
    BreadcrumbModule,
  ],
  declarations: [
    MainComponent,
    FooterComponent,
    NavbarComponent,
    SidenavComponent,
    HomeComponent,
    BreadcrumbComponent,
  ],
  exports: [MainComponent]
})
export class MainModule { }
