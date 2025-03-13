import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Todo } from '../../../Models/todo/todo';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit{
  formGroup!: FormGroup;
  constructor(private fb:FormBuilder){}
  todo:Todo ={} as Todo;
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: new FormControl('', 
        [Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(50)]
      ),
      description: new FormControl(''),
      
    });
  }
  addToDo() {

  }
}
