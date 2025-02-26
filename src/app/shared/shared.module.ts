import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
// import { FooterComponent } from '../Components/footer/footer.component';
// import { HeaderComponent } from '../Components/header/header.component';

// const components = [
//   HeaderComponent,
//   FooterComponent
// ];
const modules = [
  CommonModule,
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
  RouterModule,
  FormsModule
];

const primengModules = [
  TableModule
];

@NgModule({
  declarations: [],
  // declarations: components,
  imports: [...modules, ...primengModules],
  exports: [
    ...modules,
    ...primengModules
    // ...components
  ]
})
export class SharedModule { }
