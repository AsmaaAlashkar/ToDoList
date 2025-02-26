import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Todo } from '../../Models/todo/todo';

@Component({
  selector: 'app-to-dos',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './to-dos.component.html',
  styleUrl: './to-dos.component.css'
})
export class ToDosComponent {
  backgroundImage ="";
  toDo: Todo = {} as Todo;
  toDoList: Todo[] = [];
addToDo() {}
viewToDoDetails(id:number) {}
updateToDo(id:number, toDoData:Todo) {}
deleteToDo(id:number) {}
}
