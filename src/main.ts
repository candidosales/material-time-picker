import { enableProdMode, importProvidersFrom, provideZoneChangeDetection } from "@angular/core";

import { environment } from "./environments/environment";
import { AppComponent } from "./app/app.component";
import { MatCardModule } from "@angular/material/card";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),importProvidersFrom(BrowserModule, MatCardModule),
  ],
}).catch((err) => console.error(err));
