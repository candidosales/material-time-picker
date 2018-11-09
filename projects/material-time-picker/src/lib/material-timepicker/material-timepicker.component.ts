import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { WTimeDialogComponent } from '../w-time-dialog/w-time-dialog.component';
import { ITime } from '../w-clock/w-clock.component';

@Component({
  selector: 'material-timepicker',
  styleUrls: ['./material-timepicker.component.scss'],
  templateUrl: './material-timepicker.component.html'
})
export class MaterialTimePickerComponent implements OnInit {
  @Input() label = 'Hour';
  @Input() appearance = 'legacy';
  @Input() userTime: ITime;
  @Output() userTimeChange: EventEmitter<ITime> = new EventEmitter();

  @Input() color: string;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    if (!this.userTime) {
      this.userTime = {
        hour: 0,
        minute: 0,
        meriden: 'PM',
        format: 24
      };
    }
  }

  time(): string {
    if (!this.userTime) {
      return '';
    }

    let meriden = `${this.userTime.meriden}`;
    if (this.userTime.format === 24) {
      meriden = '';
    }

    let hour = `${this.userTime.hour}`;
    if (this.userTime.hour === 24) {
      hour = '00';
    }

    if (this.userTime.minute === 0) {
      return `${hour}:00 ${meriden}`;
    } else if (this.userTime.minute < 10) {
      const tt = '0' + String(this.userTime.minute);
      return `${hour}:${tt} ${meriden}`;
    } else {
      return `${hour}:${this.userTime.minute} ${meriden}`;
    }
  }

  showPicker() {
    const dialogRef = this.dialog.open(WTimeDialogComponent, {
      data: {
        time: {
          hour: this.userTime.hour,
          minute: this.userTime.minute,
          meriden: this.userTime.meriden,
          format: this.userTime.format
        },
        color: this.color
      }
    });

    dialogRef.afterClosed().subscribe((result: ITime | -1) => {
      // result will be update userTime object or -1 or undefined (closed dialog w/o clicking cancel)
      if (result === undefined) {
        return;
      } else if (result !== -1) {
        this.userTime = result;
        this.emituserTimeChange();
      }
    });
    return false;
  }

  private emituserTimeChange() {
    this.userTimeChange.emit(this.userTime);
  }
}
