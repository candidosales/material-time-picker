import { CLOCK_TYPE, ITime } from '../w-clock/w-clock.component';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { WTimeComponent } from '../w-time/w-time.component';

@Component({
    styleUrls: ['./w-time-dialog.component.scss'],
    templateUrl: './w-time-dialog.component.html',
    imports: [MatDialogContent, WTimeComponent]
})
export class WTimeDialogComponent {
  userTime: ITime;
  color: string;

  private VIEW_HOURS = CLOCK_TYPE.HOURS;
  private VIEW_MINUTES = CLOCK_TYPE.MINUTES;
  private currentView: CLOCK_TYPE = this.VIEW_HOURS;

  constructor(
    private dialogRef: MatDialogRef<WTimeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userTime = this.data.time;
    this.color = this.data.color;
  }

  public revert() {
    this.dialogRef.close(-1);
  }

  public submit() {
    this.dialogRef.close(this.userTime);
  }
}
