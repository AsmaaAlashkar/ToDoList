import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Todo } from '../../../Models/todo/todo';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TodoService } from '../../../services/todo/todo.service';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit{
  formGroup!: FormGroup;
  statuses!:string[];
  constructor(private fb:FormBuilder, private todoService:TodoService){}
  todo:Todo ={} as Todo;
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: new FormControl('', 
        [Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(50)]
      ),
      description: new FormControl(''),
      status: new FormControl('Pending')
    });
    this.getStatuses();
  }
  getStatuses(){
    this.todoService.getStatuses().subscribe({
      next: res =>{
        console.log("statuses", res); 
        this.statuses = res;     
      }
    });
  }
  addTask(form:NgForm) {
    console.log('form',form);
    
    // this.todoService.createTodo(todo).subscribe({
    //   next:res=>{
    //     console.log('create', res);
    //   },
    //   error: err=>{
    //     console.log('error',err);
        
    //   }
    // });
  }
}
