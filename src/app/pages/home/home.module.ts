import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from 'src/app/partials/navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class HomeModule { }
