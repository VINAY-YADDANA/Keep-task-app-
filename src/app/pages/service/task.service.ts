import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
url="http://localhost:3000/TaskData";
  constructor(private http:HttpClient) {}
    insertTask(data:any){

      return this.http.post(this.url,data);

    }
    getData(){
      return this.http.get(this.url);
    }
   
    deleteData(id:any){
      return this.http.delete('http://localhost:3000/TaskData/'+id);
    }

    

    getDatawithid(id:any){

      return this.http.get('http://localhost:3000/TaskData/'+id);

    }
    updateFInal(id : any,data:any){

      return this.http.put('http://localhost:3000/TaskData/'+id,data);

    } 
}
