import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { ShowTaskComponent } from './pages/show-task/show-task.component';
import { UpdateTaskComponent } from './pages/update-task/update-task.component';

const routes: Routes = [
  {path:"",component:AddTaskComponent},
  {path:"showTask",component:ShowTaskComponent},
  {path:"update", component:UpdateTaskComponent},
  {path : "edit/:id", component:EditTaskComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
