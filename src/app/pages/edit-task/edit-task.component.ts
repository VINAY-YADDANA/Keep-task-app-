import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']

})

export class EditTaskComponent implements OnInit {
  Edittaskform:FormGroup;

  taskfields:any;
  edittask:any;

  Titleid:any;

  // this.Edittaskform=this.fb.group({

  //   id:[this.taskfields.id],
  //   Tasktitle:[this.taskfields.Tasktitle],
  //   Taskdesc:[this.taskfields.Taskdesc]
      
  // })

  
  constructor(private activeRoute:ActivatedRoute, private taskservice:TaskService ,private fb:FormBuilder) {
    this.Edittaskform=this.fb.group({

      id:[''],
      Tasktitle:[''],
      Taskdesc:['']
        
    })
    
    this.activeRoute.paramMap.subscribe(

      
      (data:any)=>{
        console.log(data.params.id);
        this.Titleid=data.params.id;
        //  this.Edittaskform=this.fb.group({

        //   id:[this.taskfields.id],
        //   Tasktitle:[this.taskfields.Tasktitle],
        //   Taskdesc:[this.taskfields.Taskdesc]
            
        // })

        // this.taskfields=data;
        // this.Edittaskform=this.fb.group({

        //   id:[this.taskfields.id],
        //   Tasktitle:[this.taskfields.Tasktitle],
        //   Taskdesc:[this.taskfields.Taskdesc]
            
        // })

        // this.taskservice.getDatawithid(data.params.id).subscribe(
        //   (data:any)=>{
        //     console.log(data);
            
        //   },
        //   (errors)=>{
        //     console.log(errors);
            
        //    }
        // )
        
      },
    
    )
  
   }

  ngOnInit(): void {
    this.taskservice.getDatawithid(this.Titleid).subscribe(
      (data:any)=>{
        console.log(data);
        this.Edittaskform=this.fb.group({

      id:[data.id],
      Tasktitle:[data.Tasktitle],
      Taskdesc:[data.Taskdesc]
        
    })
        
      },
      (errors)=>{
        console.log(errors);
        
       }
    )
    // this.Edittaskform=this.fb.group({

    //   id:[this.taskfields.id],
    //   Tasktitle:[this.taskfields.Tasktitle],
    //   Taskdesc:[this.taskfields.Taskdesc]
        
    // })
  }
  
 
  editDatafinal(){

    this.taskservice.updateFInal(this.Titleid,this.Edittaskform.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("Data changed successfully")
        
      },
      (error)=>{
        console.log(error);
        
      }
    )

  }
}


