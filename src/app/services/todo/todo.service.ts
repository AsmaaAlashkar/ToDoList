import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/envitonment';
import { Todo } from '../../Models/todo/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoApi = `${environment.apiUrl}ToDo`;
  constructor(private http: HttpClient) { }
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todoApi}/GetAllTodos`);
  }
  getTodoById(id:number):Observable<Todo>{
    return this.http.get<Todo>(`${this.todoApi}/GetTodoById/${id}`);
  }
  createTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(`${this.todoApi}/CreateTodo`,todo);
  }
  updateTodo(todo:Todo):Observable<Todo>{
    return this.http.put<Todo>(`${this.todoApi}/UpdateTodo/${todo.id}`,todo);
  }
  deleteTodo(id:number):Observable<Todo>{
    return this.http.get<Todo>(`${this.todoApi}/DeleteTodo/${id}`);
  }
}
