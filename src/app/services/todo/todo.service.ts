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
    return this.http.get<Todo[]>(`${this.todoApi}/getAllTodos`);
  }
  getTodoById(id:number):Observable<Todo>{
    return this.http.get<Todo>(`${this.todoApi}/getTodoById/${id}`);
  }
  getStatuses():Observable<string[]>{
    return this.http.get<string[]>(`${this.todoApi}/statuses`);
  }
  getTodosByStatus(status: string):Observable<Todo[]>{
    return this.http.get<Todo[]>(`${this.todoApi}/getTodosByStatus/${status}`);

  }
  createTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(`${this.todoApi}/createTodo`,todo);
  }
  updateTodo(todo:Todo):Observable<Todo>{
    return this.http.put<Todo>(`${this.todoApi}/updateTodo/${todo.id}`,todo);
  }
  deleteTodo(id:number):Observable<Todo>{
    return this.http.get<Todo>(`${this.todoApi}/deleteTodo/${id}`);
  }
}
