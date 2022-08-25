import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent
  ],
})
export class CommonComponentsModule { }
