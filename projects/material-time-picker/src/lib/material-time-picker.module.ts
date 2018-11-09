import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule
  } from '@angular/material';
import { MaterialTimePickerComponent } from './material-timepicker/material-timepicker.component';
import { NgModule } from '@angular/core';
import { WClockComponent } from './w-clock/w-clock.component';
import { WTimeComponent } from './w-time/w-time.component';
import { WTimeDialogComponent } from './w-time-dialog/w-time-dialog.component';

@NgModule({
  declarations: [
    MaterialTimePickerComponent,
    WTimeDialogComponent,
    WClockComponent,
    WTimeComponent,
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
  ],
  exports: [
    MaterialTimePickerComponent,
    WTimeDialogComponent,
    WClockComponent,
    WTimeComponent,
  ],
  entryComponents: [
    MaterialTimePickerComponent,
    WTimeDialogComponent,
    WClockComponent,
    WTimeComponent,
  ]
})
export class MaterialTimePickerModule { }
