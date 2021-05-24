import { Component } from '@angular/core';

@Component({
  selector: 'd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  exportTime = { hour: 7, minute: 0, meriden: 'PM', format: 24 };

  onChangeHour(event) {
    console.log('event', event);
  }

}
