import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../../services/todo/todo.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../../Models/todo/todo';

@Component({
  selector: 'app-edit-todo',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.css'
})
export class EditTodoComponent {
 formGroup!: FormGroup;
  statuses!: string[];
  constructor(
    private fb: FormBuilder, 
    private todoService: TodoService, 
    private message:MessageService,
    private router:Router,
    private route: ActivatedRoute
  ) { }
  todo: Todo = {} as Todo;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getStatuses();
    if (id) {
      this.todoService.getTodoById(+id).subscribe({
        next: data =>{
          this.todo = data;
          console.log('data',data);
          
          this.createForm();
        },
        error: () => {
          this.message.add({ severity: 'error', summary: 'Error', detail: 'Todo not found' });
          this.router.navigate(['/todos']); 
        } 
      });
    }
  }
  createForm(){
    this.formGroup = this.fb.group({
      title: [this.todo.title, Validators.required],
      description: [this.todo.description, Validators.required],
      status: [this.todo.status, Validators.required],
    });
  }
  getStatuses() {
    this.todoService.getStatuses().subscribe({
      next: statuses  => {
        this.statuses = statuses ;
      }
    });
  }
  updateTask() {
    if (this.formGroup.valid) {
      const updatedTodo :Todo ={
        ...this.todo,
        ...this.formGroup.value
      };
      this.todoService.updateTodo(updatedTodo).subscribe({
        next:()=>{
          this.message.add({ severity: 'success', summary: 'Success', detail: 'Todo updated successfully' });
          setTimeout(()=>{
            this.router.navigate(['/todos']);
          },1000);
        }
      });
    }
  }

}
