import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ErrorPageModule { }
