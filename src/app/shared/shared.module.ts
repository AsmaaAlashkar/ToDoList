import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
const modules = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,

];

const materialModules =[
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
];

const primengModules = [
  TableModule,
  InputTextModule,
  ButtonModule,
  InputTextareaModule,
  TagModule,
  DropdownModule
];

@NgModule({
  declarations: [],
  // declarations: components,
  imports: [
    ...modules,
    ...primengModules,
    ...materialModules,
  ],
  exports: [
    ...modules,
    ...primengModules,
    ...materialModules,
    // ...components
  ]
})
export class SharedModule { }
