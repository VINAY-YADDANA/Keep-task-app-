import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module'; 
import { AddTaskComponent } from './add-task/add-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
  declarations: [
    AddTaskComponent,
    ShowTaskComponent,
    UpdateTaskComponent,
    EditTaskComponent
  ],
  imports: [
    CommonModule, 
    CommonComponentsModule,
    MatToolbarModule,MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    AddTaskComponent,
    ShowTaskComponent
  ]
})
export class PagesModule { }
