import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// main.ts
import { provideHttpClient, withFetch } from '@angular/common/http';

// ...

provideHttpClient(withFetch());

// ...

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
