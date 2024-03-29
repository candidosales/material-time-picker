# Material Time Picker

A simple time picker component using Angular Material.

## Compatibility

| Version | Angular |
| ------- | :-----: |
| 2.7.0   |   15    |
| 2.6.0   |   14    |
| 2.5.0   |   13    |
| 2.4.0   |   12    |
| 2.3.0   |   11    |
| 2.2.0   |   10    |
| 2.1.0   |    9    |
| 2.0.0   |    7    |

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

### Usage

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "d-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "demo";
  exportTime = { hour: 7, minute: 15, meriden: "PM", format: 24 };

  onChangeHour(event) {
    console.log("event", event);
  }
}
```

```html
<material-timepicker
  color="primary"
  label="Hour 2"
  appearance="fill"
  [userTime]="exportTime"
  (change)="onChangeHour($event)"
  revertLabel="Remove"
  submitLabel="Ok"
  [disabled]="disabled"
  [readonly]="readonly"
></material-timepicker>
```

## Examples

Check the [demo](https://stackblitz.com/edit/material-time-picker).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
