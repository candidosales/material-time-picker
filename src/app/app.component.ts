import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MaterialTimePickerComponent, WTimeComponent } from 'material-time-picker';

@Component({
    selector: 'd-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [MaterialTimePickerComponent, MatCard, MatCardContent, WTimeComponent]
})
export class AppComponent {
  title = 'demo';
  exportTime = { hour: 7, minute: 0, meriden: 'PM', format: 24 };

  onChangeHour(event) {
    console.log('event', event);
  }

}
