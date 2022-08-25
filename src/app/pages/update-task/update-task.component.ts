import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // } 
  taskdata:any;
  constructor(private service:TaskService) { }

  ngOnInit(): void {
    this.service.getData()
     .subscribe(
      (data)=>{

     this.taskdata=data;
    
    },
     (errors)=>{
      console.log(errors);
      
     }
     )

     
  }
  Datadelete(id:any){
  this.service.deleteData(id).subscribe(
    (data)=>{
      this.taskdata=data
      this.service.getData()
     .subscribe(
      (data)=>{

     this.taskdata=data;
    
    },
     (errors)=>{
      console.log(errors);
      
     }
     )
    },
    (errors)=>{
      console.log(errors);
      
     }

   )
  }
  // updateData(id:any){
  //   this.service.updateData(id).subscribe(
     

  //   )

    
  }


