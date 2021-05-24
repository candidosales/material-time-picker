# Material Time Picker

A simple time picker component using Angular Material.

### Compatibility

- Angular 8
- Material 8

## Installation

```bash
npm i @candidosales/material-time-picker
```

## Quickstart

Import **material-time-picker** module in Angular app.

```typescript
import { MaterialTimePickerModule } from '@candidosales/material-time-picker';

(...)

@NgModule({
  (...)
  imports: [
    MaterialTimePickerModule
  ]
  (...)
})
```

#### Usage

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  private exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };

  onChangeHour(event) {
    console.log('event', event);
  }
}
```

```html
<material-timepicker color="primary" label="Hour 2" appearance="standard" [userTime]="exportTime" (change)="onChangeHour($event)" revertLabel="Remove" submitLabel="Ok" [disabled]="disabled" [readonly]="readonly"></material-timepicker>
```

## Examples

Check the [demo](https://stackblitz.com/edit/material-time-picker).

## Acknowledgments

* <a href="https://github.com/SteveDunlap13/MaterialTimeControl">SteveDunlap13/MaterialTimeControl</a>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details


## Reference

https://medium.com/@tomsu/how-to-build-a-library-for-angular-apps-4f9b38b0ed11
