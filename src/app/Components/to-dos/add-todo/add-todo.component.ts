import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Todo } from '../../../Models/todo/todo';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../../services/todo/todo.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit {
  formGroup!: FormGroup;
  statuses!: string[];
  constructor(
    private fb: FormBuilder, 
    private todoService: TodoService, 
    private message:MessageService,
    private router:Router
  ) { }
  todo: Todo = {} as Todo;
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
  getStatuses() {
    this.todoService.getStatuses().subscribe({
      next: res => {
        this.statuses = res;
      }
    });
  }
  addTask() {
    if (this.formGroup.valid) {
      this.todo = this.formGroup.value;
      this.todoService.createTodo(this.todo).subscribe({
        next: res => {
          this.message.add({ severity: 'success', summary: 'Success', detail: 'Task Updated Successfully!' });
          setTimeout(()=>{
            this.router.navigate(['todos']);
          },1000);
        },
        error: err => {
          this.message.add({ severity: 'error', summary: 'Error', detail: 'Task Not Added!' });
        }
      });
    }
    this.formGroup.reset();
  }

}
