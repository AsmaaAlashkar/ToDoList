import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Todo } from '../../Models/todo/todo';
import { TodoService } from '../../services/todo/todo.service';

@Component({
  selector: 'app-to-dos',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './to-dos.component.html',
  styleUrl: './to-dos.component.css'
})
export class ToDosComponent implements OnInit{
  loading: boolean = true;
  IsTodo:boolean = true;
  toDo: Todo = {} as Todo;
  toDoList!: Todo[];
  constructor(private todoService: TodoService){}
  ngOnInit(): void {
    console.log("todo started");
    this.todos(); 
  }

  getSeverity(status: string):string {
    switch (status) {
      case 'Pending': return 'info';
      case 'InProgress': return 'primary';
      case 'Completed': return 'success';
      case 'Canceled': return 'danger';
      case 'OnHold': return 'warning';
      default: return 'info';
    }
  }
  
  
  todos(){
    this.todoService.getTodos().subscribe({
      next:res =>{
        this.toDoList = res;
        this.loading = false;        
        if (this.toDoList.length<=0) {
          this.IsTodo== false;
        }
      }
    });
  }

  viewToDoDetails(id:number) {}
  updateToDo(id:number, toDoData:Todo) {}
  deleteToDo(id:number) {}
}
