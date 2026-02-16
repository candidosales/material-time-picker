# Material Time Picker

A simple time picker component using Angular Material.

## Compatibility

| Version | Angular |
| ------- | :-----: |
| 2.12.0  |   19    |
| 2.11.0  |   18    |
| 2.10.0  |   17    |
| 2.9.0   |   16    |
| 2.8.0   |   15    |
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

### Usage

```typescript
import { Component } from "@angular/core";
import { MaterialTimePickerComponent } from "material-time-picker";

@Component({
  standalone: true,
  selector: "d-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [MaterialTimePickerComponent],
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
<material-timepicker color="primary" label="Hour 2" appearance="fill" [userTime]="exportTime" (change)="onChangeHour($event)" revertLabel="Remove" submitLabel="Ok" [disabled]="disabled" [readonly]="readonly"></material-timepicker>
```

## Examples

Check the [demo](https://stackblitz.com/edit/material-time-picker).

## 📚 Reference

- https://medium.com/@tomsu/how-to-build-a-library-for-angular-apps-4f9b38b0ed11

## 👍 Contribute

If you want to say thank you and/or support the active development this project:

1. Add a [GitHub Star](https://github.com/candidosales/material-time-picker/stargazers) to the project.
2. Tweet about the project [on your Twitter](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fcandidosales%2Fmaterial-time-picker&text=Dependencies%20report%20aims%20to%20help%20analyze%20the%20consistency%20of%20the%20dependencies%20in%20your%20company%27s%20frontend%20projects).
3. Write a review or tutorial on [Medium](https://medium.com/), [Dev.to](https://dev.to/) or personal blog.
4. Support the project by donating a [cup of coffee](https://buymeacoff.ee/candidosales).

## ☕ Supporters

If you want to support Material Time Picker, you can ☕ [**buy a coffee here**](https://buymeacoff.ee/candidosales)

## ✨ Acknowledgment

- [SteveDunlap13/MaterialTimeControl](https://github.com/SteveDunlap13/MaterialTimeControl)

## Author

- Cândido Sales - [@candidosales](https://twitter.com/candidosales)

## ⚠️ Copyright and license

Code and documentation copyright 2020-2030 the [Authors](https://github.com/candidosales/material-time-picker/graphs/contributors) and Code released under the [MIT License](https://github.com/candidosales/material-time-picker/blob/master/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).

## Test Locally

```bash
npm run lib:build
npm run start
```
