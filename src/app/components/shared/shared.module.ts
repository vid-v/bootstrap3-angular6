import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTableComponent } from './shared-table/shared-table.component';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { InstructionComponent } from './model/instruction/instruction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SharedTableComponent,
    TitleHeaderComponent,
    InstructionComponent
  ],
  exports: [
    // common modules.
    FormsModule,
    ReactiveFormsModule,


    SharedTableComponent,
    TitleHeaderComponent,
    InstructionComponent
  ]
})
export class SharedModule { }
