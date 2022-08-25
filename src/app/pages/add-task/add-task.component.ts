import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskService } from '../service/task.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {



  constructor(private taskService: TaskService, private snack: MatSnackBar ) { }

  ngOnInit(): void {
  }

  createTask(task:any){
    console.log(task);

    this.taskService.insertTask(task).subscribe(
      (task)=>{
        console.log(task);
        this.snack.open("Task Created","Done")
        
      },
      (error)=>{
       console.log(error);
        
      }

    )
    
  }


}
