import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
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
        FlexLayoutModule,
    ],
    exports: [
        MaterialTimePickerComponent,
        WTimeDialogComponent,
        WClockComponent,
        WTimeComponent,
    ]
})
export class MaterialTimePickerModule { }
