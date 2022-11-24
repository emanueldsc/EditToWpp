import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { InputMaskModule } from 'primeng/inputmask';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    EditorModule,
    InputMaskModule,
    ButtonModule,
    BadgeModule
  ]
})
export class PrimeModule { }
