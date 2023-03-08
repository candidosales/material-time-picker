import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
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
    ],
    exports: [
        MaterialTimePickerComponent,
        WTimeDialogComponent,
        WClockComponent,
        WTimeComponent,
    ]
})
export class MaterialTimePickerModule { }
