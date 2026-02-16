import { CLOCK_TYPE, ITime, WClockComponent } from '../w-clock/w-clock.component';
import { Utils } from '../utils';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';

import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { MatToolbar } from '@angular/material/toolbar';
import { NgClass } from '@angular/common';

@Component({
    selector: 'w-time',
    templateUrl: './w-time.component.html',
    styleUrls: ['./w-time.component.scss'],
    imports: [NgClass, MatToolbar, WClockComponent]
})
export class WTimeComponent implements OnInit {
  destroyed = new Subject<void>();
  
  @Input() userTime: ITime;
  @Output() userTimeChange: EventEmitter<ITime> = new EventEmitter();

  @Input() revertLabel: string;
  @Input() submitLabel: string;

  @Output() onRevert: EventEmitter<null> = new EventEmitter();
  @Output() onSubmit: EventEmitter<ITime> = new EventEmitter();

  @Input() color: string;

  public VIEW_HOURS = CLOCK_TYPE.HOURS;
  public VIEW_MINUTES = CLOCK_TYPE.MINUTES;
  public currentView: CLOCK_TYPE = this.VIEW_HOURS;

  currentClassScreenSize: string = '';

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
    ])
    .pipe(takeUntil(this.destroyed))
    .subscribe(result => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {

          this.currentClassScreenSize = 'vertical-time';
        }
        else 
          this.currentClassScreenSize = '';
      }
    });

  }

  ngOnInit() {
    if (!this.userTime) {
      this.userTime = {
        hour: 6,
        minute: 0,
        meriden: 'PM',
        format: 12
      };
    }

    if (!this.revertLabel) {
      this.revertLabel = 'Cancel';
    }

    if (!this.submitLabel) {
      this.submitLabel = 'Okay';
    }
  }

  public formatHour(format, hour): string {
    return Utils.formatHour(format, hour);
  }

  public formatMinute(minute): string {
    return Utils.formatMinute(minute);
  }

  public setCurrentView(type: CLOCK_TYPE) {
    this.currentView = type;
  }

  public setMeridien(m: 'PM' | 'AM') {
    this.userTime.meriden = m;
  }

  public revert() {
    this.onRevert.emit();
  }

  public submit() {
    this.onSubmit.emit(this.userTime);
  }

  public emituserTimeChange(event) {
    this.userTimeChange.emit(this.userTime);
  }
}
