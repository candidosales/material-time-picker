import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from "@angular/core";
import { ITime } from "../w-clock/w-clock.component";
import { MatDialog } from "@angular/material/dialog";
import { Utils } from "../utils";
import { WTimeDialogComponent } from "../w-time-dialog/w-time-dialog.component";
import { MatIcon } from "@angular/material/icon";
import { MatInput } from "@angular/material/input";
import { MatFormField, MatLabel, MatSuffix } from "@angular/material/form-field";

@Component({
    selector: "material-timepicker",
    styleUrls: ["./material-timepicker.component.scss"],
    templateUrl: "./material-timepicker.component.html",
    encapsulation: ViewEncapsulation.None,
    imports: [
        MatFormField,
        MatLabel,
        MatInput,
        MatIcon,
        MatSuffix,
    ]
})
export class MaterialTimePickerComponent implements OnInit {
  @Input() label = "Hour";
  @Input() appearance = "fill";
  @Input() userTime: ITime;
  @Input() color: string;
  @Input() revertLabel: string;
  @Input() submitLabel: string;
  @Input() disabled: boolean;
  @Input() readonly: boolean;
  /**
   * Class to put in the form-field
   */
  @Input() classFormField: string;

  @Output() change: EventEmitter<ITime> = new EventEmitter<ITime>();

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    if (!this.userTime) {
      this.userTime = {
        hour: 0,
        minute: 0,
        meriden: "PM",
        format: 24,
      };
    }
  }

  time(): string {
    if (!this.userTime) {
      return "";
    }

    let meriden = `${this.userTime.meriden}`;
    if (this.userTime.format === 24) {
      meriden = "";
    }

    let hour = `${this.userTime.hour}`;
    if (this.userTime.hour === 24) {
      hour = "00";
    }

    if (this.userTime.minute === 0) {
      return `${hour}:00 ${meriden}`;
    } else if (this.userTime.minute < 10) {
      const tt = "0" + String(this.userTime.minute);
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
          format: this.userTime.format,
        },
        color: this.color,
        revertLabel: this.revertLabel,
        submitLabel: this.submitLabel,
      },
    });

    dialogRef.afterClosed().subscribe((result: ITime | -1) => {
      // result will be update userTime object or -1 or undefined (closed dialog w/o clicking cancel)
      if (result === undefined) {
        return;
      } else if (result !== -1) {
        this.userTime = result;

        const hour = result.hour;
        const minute = result.minute;

        const dataEvent = {
          hour: Utils.formatHour(result.format, hour),
          minute: Utils.formatMinute(minute),
          meriden: this.userTime.meriden,
          format: this.userTime.format,
        };
        this.emitChange(dataEvent);
      }
    });
    return false;
  }

  private emitChange(data) {
    this.change.emit(data);
  }
}
