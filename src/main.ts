import { AppComponent } from './app/app.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

bootstrapApplication(AppComponent, { 
  providers: [
    provideRouter(
      APP_ROUTES,
      withComponentInputBinding()
    ),
    provideHttpClient(
      withInterceptors([
        //...
      ])
    ),

    // provideState({}),
    // provideEffects([]),
    // provideStoreDevTools(),
    // ...
  ] 
})
  .catch(err => console.error(err));
