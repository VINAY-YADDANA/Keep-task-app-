import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

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
  // updateData(){
  //   this.service.updateData(),

  //   )
  }


