import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Todo } from '../../Models/todo/todo';
import { TodoService } from '../../services/todo/todo.service';
import { ConfirmationService, MessageService } from 'primeng/api';

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
  constructor(
    private todoService: TodoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ){}
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
        this.statuses = res;     
      }
    });
  }

  deleteToDo(id: number, event: Event) {
    console.log('id',id);
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this todo?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
      accept: () => {
        this.todoService.deleteTodo(id).subscribe({          
          next: () => {
            this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Todo deleted successfully' });
            this.todos();
          },
          error: () => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to delete todo' });
          }
        });
      },
      reject: () => {
        this.messageService.add({ severity: 'info', summary: 'Cancelled', detail: 'Delete cancelled' });
      }
    });
  }
}
