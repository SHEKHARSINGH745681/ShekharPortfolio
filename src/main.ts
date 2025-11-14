import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    // Initialize AOS only in the browser (avoid SSR/runtime errors where document/window are undefined)
    if (typeof document !== 'undefined' && typeof window !== 'undefined') {
      import('aos').then(({ default: AOS }) => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true
        });
      }).catch(err => console.error('Failed to load AOS', err));
    }
  })
  .catch(err => console.error(err));
