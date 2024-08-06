import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/shared/services/auth.interceptor';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  ...appConfig, // Ajoutez les configurations spécifiques de l'application
  providers: [
    ...appConfig.providers, // Fusionnez les fournisseurs existants de appConfig
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),provideRouter(routes)
  ]
}).catch((err) => console.error(err));