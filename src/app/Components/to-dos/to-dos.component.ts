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
  count:number = 0;
  IsTodo:boolean = false;
  backgroundImage ="";
  toDo: Todo = {} as Todo;
  toDoList!: Todo[];
  constructor(private todoService: TodoService){}
  ngOnInit(): void {
    console.log("todo started");

    this.todos();
    
  }

  todos(){
    this.todoService.getTodos().subscribe({
      next:res =>{
        console.log('res',res);
        this.toDoList = res;
      }
    });
  }

  viewToDoDetails(id:number) {}
  updateToDo(id:number, toDoData:Todo) {}
  deleteToDo(id:number) {}
}
