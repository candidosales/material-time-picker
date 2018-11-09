import { Component } from '@angular/core';

@Component({
  selector: 'd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  private exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };

}
