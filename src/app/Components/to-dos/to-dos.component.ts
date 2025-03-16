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
  toDoList!: Todo[];
  statuses!:string[];
  constructor(private todoService: TodoService){}
  ngOnInit(): void {
    console.log("todo started");
    this.getStatuses();
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
      }
    });
  }

  getStatuses(){
    this.todoService.getStatuses().subscribe({
      next: res =>{
        console.log("statuses", res); 
        this.statuses = res;     
      }
    });
  }

  deleteToDo(id:number) {}
}
