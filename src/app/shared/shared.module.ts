import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PopinComponent } from './popin/popin.component';
import { AutoFocusDirective } from './auto-focus/auto-focus.directive';
import { ProgramService } from './program/program.service';
import { RecordService } from './record/record.service';
import { ParseBreakLinePipe } from './utils/parse-break-line.pipe';
import { FilterByStatePipe } from './filter-by-state.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    PopinComponent,
    AutoFocusDirective,
    ParseBreakLinePipe,
    FilterByStatePipe
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    PopinComponent,
    AutoFocusDirective,
    ParseBreakLinePipe,
    FilterByStatePipe
  ],
  providers: [
    ProgramService,
    RecordService
  ]
})
export class SharedModule { }
