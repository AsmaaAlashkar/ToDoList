import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Todo } from '../../../Models/todo/todo';
import { TodoService } from '../../../services/todo/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-to-do-details',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './to-do-details.component.html',
  styleUrl: './to-do-details.component.css'
})
export class ToDoDetailsComponent implements OnInit{
  todo:Todo = {} as Todo;
  private todoServise = inject(TodoService);
  private route = inject(ActivatedRoute);
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getTaskDetails(+id);
    }
  }
  getTaskDetails(id:number){
    this.todoServise.getTodoById(id).subscribe({
      next:res=>{
        // console.log(res);
        this.todo = res;
      },
      error:err=>{

      }
    })
  }
}
